import { __decorate } from "tslib";
import { css, html, query, property, state, LitElement, } from 'lit-element';
import { get, translate } from 'lit-translate';
import { nothing } from 'lit-html';
import '@material/mwc-list/mwc-check-list-item';
import '@material/mwc-list/mwc-radio-list-item';
import '@material/mwc-button';
import '@material/mwc-icon-button';
import '@compas-oscd/open-scd/dist/oscd-filter-button.js';
import './ied/element-path.js';
import './ied/create-ied-dialog.js';
import './ied/add-access-point-dialog.js';
import './ied/add-ldevice-dialog.js';
import './ied/add-ln-dialog.js';
import { findLLN0LNodeType, createLLN0LNodeType, createIEDStructure, createAccessPoint, createServerAt, findDOTypeElement, } from './ied/foundation.js';
import { compareNames, getDescriptionAttribute, getNameAttribute, newWizardEvent, } from '@compas-oscd/open-scd/dist/foundation.js';
import { getIcon } from '@compas-oscd/open-scd/dist/icons/icons.js';
import { newActionEvent, newEditEventV2, } from '@compas-oscd/core';
import { createElement } from '@compas-oscd/xml';
import { lnInstGenerator } from '@openenergytools/scl-lib/dist/generator/lnInstGenerator.js';
import { wizards } from '../wizards/wizard-library.js';
import { removeIEDWizard } from '../wizards/ied.js';
import { removeAccessPointWizard } from '../wizards/accesspoint.js';
import { editServicesWizard } from '../wizards/services.js';
import { getDataModelChildren } from '../wizards/foundation/finder.js';
/** An editor [[`plugin`]] for editing the `IED` section. */
export default class IedPlugin extends LitElement {
    constructor() {
        super(...arguments);
        this.editCount = -1;
        this.oscdApi = null;
        this.selectedIEDs = [];
        this.selectedLNClasses = [];
        this.expandedTreeNodes = [];
        this.expandedTableNodes = [];
    }
    get iedList() {
        return this.doc
            ? Array.from(this.doc.querySelectorAll(':root > IED')).sort((a, b) => compareNames(a, b))
            : [];
    }
    get lnClassList() {
        const currentIed = this.selectedIed;
        const uniqueLNClassList = [];
        if (currentIed) {
            return Array.from(currentIed.querySelectorAll('LN0, LN'))
                .filter(element => element.hasAttribute('lnClass'))
                .filter(element => {
                const lnClass = element.getAttribute('lnClass') ?? '';
                if (uniqueLNClassList.includes(lnClass)) {
                    return false;
                }
                uniqueLNClassList.push(lnClass);
                return true;
            })
                .sort((a, b) => {
                const aLnClass = a.getAttribute('lnClass') ?? '';
                const bLnClass = b.getAttribute('lnClass') ?? '';
                return aLnClass.localeCompare(bLnClass);
            })
                .map(element => {
                const lnClass = element.getAttribute('lnClass');
                const label = this.nsdoc.getDataDescription(element).label;
                return [lnClass, label];
            });
        }
        return [];
    }
    get selectedIed() {
        // When there is no IED selected, or the selected IED has no parent (IED has been removed)
        // select the first IED from the List.
        if (this.selectedIEDs.length >= 1) {
            const iedList = this.iedList;
            return iedList.find(element => {
                const iedName = getNameAttribute(element);
                return this.selectedIEDs[0] === iedName;
            });
        }
        return undefined;
    }
    connectedCallback() {
        super.connectedCallback();
        this.loadPluginState();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.storePluginState();
    }
    createVirtualIED(iedName) {
        const inserts = [];
        const existingLLN0 = findLLN0LNodeType(this.doc);
        const lnTypeId = existingLLN0?.getAttribute('id') || 'PlaceholderLLN0';
        const ied = createIEDStructure(this.doc, iedName, lnTypeId);
        const dataTypeTemplates = this.doc.querySelector('DataTypeTemplates');
        inserts.push({
            parent: this.doc.querySelector('SCL'),
            node: ied,
            reference: dataTypeTemplates,
        });
        if (!existingLLN0) {
            const lnodeTypeInserts = createLLN0LNodeType(this.doc, lnTypeId);
            inserts.push(...lnodeTypeInserts);
        }
        this.dispatchEvent(newEditEventV2(inserts));
        this.selectedIEDs = [iedName];
        this.selectedLNClasses = [];
        this.resetHierarchy(ied);
        this.requestUpdate('selectedIed');
    }
    updated(_changedProperties) {
        super.updated(_changedProperties);
        // When the document is updated, we reset the selected IED if it no longer exists
        const isDocumentUpdated = _changedProperties.has('doc') ||
            _changedProperties.has('editCount') ||
            _changedProperties.has('nsdoc');
        if (isDocumentUpdated) {
            // if the IED exists, retain selection
            const iedExists = this.doc?.querySelector(`IED[name="${this.selectedIEDs[0]}"]`);
            if (iedExists) {
                if (!this.selectedHierarchyNode ||
                    !iedExists.contains(this.selectedHierarchyNode)) {
                    this.resetHierarchy(iedExists);
                }
                return;
            }
            this.selectedIEDs = [];
            this.selectedLNClasses = [];
            const iedList = this.iedList;
            if (iedList.length > 0) {
                const iedName = getNameAttribute(iedList[0]);
                if (iedName) {
                    this.selectedIEDs = [iedName];
                    this.resetHierarchy(iedList[0]);
                }
            }
        }
    }
    loadPluginState() {
        const stateApi = this.oscdApi?.pluginState;
        const selectedIEDs = stateApi?.getState()?.selectedIEDs ?? null;
        if (selectedIEDs) {
            this.onSelectionChange(selectedIEDs);
        }
    }
    storePluginState() {
        const stateApi = this.oscdApi?.pluginState;
        if (stateApi) {
            stateApi.setState({ selectedIEDs: this.selectedIEDs });
        }
    }
    onSelectionChange(selectedIeds) {
        const equalArrays = (first, second) => {
            return (first.length === second.length &&
                first.every((val, index) => val === second[index]));
        };
        const selectionChanged = !equalArrays(this.selectedIEDs, selectedIeds);
        if (!selectionChanged) {
            return;
        }
        this.selectedIEDs = selectedIeds;
        this.selectedLNClasses = [];
        this.resetHierarchy(this.iedList.find(ied => getNameAttribute(ied) === selectedIeds[0]));
        this.requestUpdate('selectedIed');
    }
    isVisible(node) {
        return (!['LN', 'LN0'].includes(node.tagName) ||
            this.selectedLNClasses.length === 0 ||
            this.selectedLNClasses.includes(node.getAttribute('lnClass') ?? ''));
    }
    getChildren(node) {
        if (node.tagName === 'IED')
            return Array.from(node.querySelectorAll(':scope > AccessPoint'));
        if (node.tagName === 'AccessPoint')
            return Array.from(node.querySelectorAll(':scope > Server, :scope > LN'));
        if (['Server', 'LDevice', 'LN', 'LN0', 'DO', 'SDO', 'DA', 'BDA'].includes(node.tagName))
            return getDataModelChildren(node);
        return [];
    }
    hasChildren(node) {
        if (node.tagName === 'IED')
            return node.querySelector(':scope > AccessPoint') !== null;
        if (node.tagName === 'AccessPoint')
            return node.querySelector(':scope > Server, :scope > LN') !== null;
        if (node.tagName === 'Server')
            return node.querySelector(':scope > LDevice') !== null;
        if (node.tagName === 'LDevice')
            return node.querySelector(':scope > LN, :scope > LN0') !== null;
        if (node.tagName === 'LN' || node.tagName === 'LN0')
            return node.hasAttribute('lnType');
        if (['DO', 'SDO', 'DA', 'BDA'].includes(node.tagName))
            return node.hasAttribute('type');
        return node.childElementCount > 0;
    }
    resetHierarchy(node) {
        this.selectedHierarchyNode = undefined;
        this.expandedTreeNodes = node ? [node] : [];
        this.expandedTableNodes = [];
    }
    selectHierarchyNode(node) {
        this.selectedHierarchyNode = node;
        this.expandedTableNodes = [node];
    }
    nodeLabel(node) {
        const desc = getDescriptionAttribute(node);
        const withDescription = (label) => `${label}${desc ? ` — ${desc}` : ''}`;
        if (node.tagName === 'Server')
            return withDescription('Server');
        if (node.tagName === 'LDevice') {
            const label = getNameAttribute(node) ?? node.getAttribute('inst') ?? 'LDevice';
            const ldName = node.getAttribute('ldName');
            return `${withDescription(label)}${ldName ? ` — ${ldName}` : ''}`;
        }
        if (node.tagName === 'LN' || node.tagName === 'LN0') {
            const prefix = node.getAttribute('prefix');
            const inst = node.getAttribute('inst');
            const label = this.nsdoc.getDataDescription(node).label;
            return `${prefix ? `${prefix} — ` : ''}${label}${inst ? ` — ${inst}` : ''}${desc ? ` — ${desc}` : ''}`;
        }
        if (node.tagName === 'DA' || node.tagName === 'BDA') {
            const name = getNameAttribute(node) ?? node.tagName;
            const bType = node.getAttribute('bType') ?? '';
            const fc = node.getAttribute('fc');
            return `${name} — ${bType}${fc ? ` [${fc}]` : ''}`;
        }
        return withDescription(getNameAttribute(node) ?? node.getAttribute('inst') ?? node.tagName);
    }
    toggleNode(node, tree) {
        const expandedNodes = tree
            ? this.expandedTreeNodes
            : this.expandedTableNodes;
        const next = expandedNodes.includes(node)
            ? expandedNodes.filter(item => item !== node)
            : [...expandedNodes, node];
        if (tree)
            this.expandedTreeNodes = next;
        else
            this.expandedTableNodes = next;
    }
    openTreeDialog(node, action) {
        this.treeActionNode = node;
        void this.updateComplete.then(() => {
            if (action === 'add' && node.tagName === 'IED')
                this.treeAddAccessPointDialog.show();
            if (action === 'add' && node.tagName === 'Server')
                this.treeAddLDeviceDialog.show();
            if (action === 'add' && node.tagName === 'LDevice')
                this.treeAddLnDialog.show();
        });
    }
    createAccessPoint(data) {
        const ied = this.treeActionNode;
        if (ied?.tagName !== 'IED')
            return;
        const accessPoint = createAccessPoint(this.doc, data.name);
        const inserts = [
            { parent: ied, node: accessPoint, reference: null },
        ];
        if (data.createServerAt && data.serverAtApName) {
            inserts.push({
                parent: accessPoint,
                node: createServerAt(this.doc, data.serverAtApName, data.serverAtDesc),
                reference: null,
            });
        }
        this.dispatchEvent(newEditEventV2(inserts));
    }
    createLDevice(data) {
        const server = this.treeActionNode;
        if (server?.tagName !== 'Server')
            return;
        const inserts = [];
        const lln0Type = findLLN0LNodeType(this.doc);
        const lnTypeId = lln0Type?.getAttribute('id') || 'PlaceholderLLN0';
        if (!lln0Type)
            inserts.push(...createLLN0LNodeType(this.doc, lnTypeId));
        const lDevice = createElement(this.doc, 'LDevice', { inst: data.inst });
        lDevice.appendChild(createElement(this.doc, 'LN0', {
            lnClass: 'LLN0',
            inst: '',
            lnType: lnTypeId,
        }));
        inserts.push({ parent: server, node: lDevice, reference: null });
        this.dispatchEvent(newEditEventV2(inserts));
    }
    createLN(data) {
        const lDevice = this.treeActionNode;
        if (lDevice?.tagName !== 'LDevice')
            return;
        const getInst = lnInstGenerator(lDevice, 'LN');
        const inserts = [];
        for (let i = 0; i < data.amount; i++) {
            const inst = getInst(data.lnClass);
            if (!inst)
                break;
            inserts.push({
                parent: lDevice,
                node: createElement(this.doc, 'LN', {
                    lnClass: data.lnClass,
                    lnType: data.lnType,
                    inst,
                    ...(data.prefix ? { prefix: data.prefix } : {}),
                }),
                reference: null,
            });
        }
        this.dispatchEvent(newEditEventV2(inserts));
    }
    removeElement(node) {
        this.dispatchEvent(newActionEvent({ old: { parent: node.parentElement, element: node } }));
    }
    runTreeAction(node, action) {
        if (action === 'add')
            return this.openTreeDialog(node, action);
        if (action === 'services') {
            const services = node.querySelector(':scope > Services');
            const wizard = services && editServicesWizard(services);
            if (wizard)
                this.dispatchEvent(newWizardEvent(wizard));
            return;
        }
        if (action === 'edit') {
            if (node.tagName === 'IED') {
                const wizard = wizards['IED'].edit(node);
                if (wizard)
                    this.dispatchEvent(newWizardEvent(wizard));
            }
            if (node.tagName === 'AccessPoint') {
                const wizard = wizards['AccessPoint'].edit(node);
                if (wizard)
                    this.dispatchEvent(newWizardEvent(wizard));
            }
            if (node.tagName === 'LDevice') {
                const wizard = wizards['LDevice'].edit(node);
                if (wizard)
                    this.dispatchEvent(newWizardEvent(wizard));
            }
            if (node.tagName === 'LN' || node.tagName === 'LN0') {
                const wizard = wizards[node.tagName].edit(node);
                if (wizard)
                    this.dispatchEvent(newWizardEvent(wizard));
            }
            return;
        }
        if (node.tagName === 'IED') {
            const wizard = removeIEDWizard(node);
            if (wizard)
                this.dispatchEvent(newWizardEvent(() => wizard));
            else
                this.removeElement(node);
            return;
        }
        if (node.tagName === 'AccessPoint') {
            const wizard = removeAccessPointWizard(node);
            if (wizard)
                this.dispatchEvent(newWizardEvent(() => wizard));
            else
                this.removeElement(node);
            return;
        }
        this.removeElement(node);
    }
    renderTreeActions(node) {
        const actions = [];
        const hasServices = node.querySelector(':scope > Services');
        if (['IED', 'AccessPoint', 'LDevice', 'LN', 'LN0'].includes(node.tagName))
            actions.push({ icon: 'edit', label: get('edit'), action: 'edit' });
        if (['IED', 'AccessPoint', 'LDevice', 'LN'].includes(node.tagName))
            actions.push({
                icon: 'delete',
                label: get('remove'),
                action: 'delete',
            });
        if (['IED', 'AccessPoint'].includes(node.tagName) && hasServices)
            actions.push({
                icon: 'settings',
                label: get('iededitor.settings'),
                action: 'services',
            });
        if (node.tagName === 'IED')
            actions.push({
                icon: 'playlist_add',
                label: get('iededitor.addAccessPoint'),
                action: 'add',
            });
        if (node.tagName === 'Server')
            actions.push({
                icon: 'playlist_add',
                label: get('iededitor.addLDeviceDialog.title'),
                action: 'add',
            });
        if (node.tagName === 'LDevice')
            actions.push({
                icon: 'playlist_add',
                label: get('iededitor.addLnDialog.title'),
                action: 'add',
            });
        return html `<span class="tree-actions">
      ${actions.map(({ icon, label, action }) => html `<mwc-icon-button
          icon="${icon}"
          title="${label}"
          aria-label="${label}"
          @click=${(event) => {
            event.stopPropagation();
            this.runTreeAction(node, action);
        }}
        ></mwc-icon-button>`)}
    </span>`;
    }
    renderTreeNode(node, depth = 0) {
        const hasChildren = this.hasChildren(node);
        const expanded = this.expandedTreeNodes.includes(node);
        const selected = this.selectedHierarchyNode === node;
        return html `<li>
      <div class="tree-row" style="padding-left: ${depth * 16}px">
        ${hasChildren
            ? html `<button
              class="tree-toggle"
              aria-label="${expanded ? 'Collapse' : 'Expand'} ${this.nodeLabel(node)}"
              @click=${(event) => {
                event.stopPropagation();
                this.toggleNode(node, true);
            }}
            >
              ${expanded ? '−' : '+'}
            </button>`
            : html `<span class="tree-spacer"></span>`}
        <button
          class="tree-node"
          ?aria-current=${selected}
          @click=${() => this.selectHierarchyNode(node)}
        >
          ${this.nodeLabel(node)}
        </button>
        ${this.renderTreeActions(node)}
      </div>
      ${expanded
            ? html `<ul>
            ${this.getChildren(node)
                .filter(child => this.isVisible(child))
                .map(child => this.renderTreeNode(child, depth + 1))}
          </ul>`
            : nothing}
    </li>`;
    }
    tableRows() {
        const rows = [];
        const selectedNode = this.selectedHierarchyNode;
        const visit = (node, depth) => {
            if (!this.expandedTableNodes.includes(node))
                return;
            for (const child of this.getChildren(node)) {
                if (!this.isVisible(child))
                    continue;
                rows.push({ node: child, depth });
                visit(child, depth + 1);
            }
        };
        if (selectedNode)
            visit(selectedNode, 0);
        return rows;
    }
    resizeTree(event) {
        const tree = this.shadowRoot?.querySelector('.hierarchy');
        if (!tree)
            return;
        const startX = event.clientX;
        const startWidth = tree.getBoundingClientRect().width;
        const onMove = (move) => {
            this.treeWidth = Math.min(600, Math.max(220, startWidth + move.clientX - startX));
        };
        const onUp = () => {
            window.removeEventListener('pointermove', onMove);
            window.removeEventListener('pointerup', onUp);
        };
        window.addEventListener('pointermove', onMove);
        window.addEventListener('pointerup', onUp, { once: true });
    }
    renderTableElement(node) {
        let badge = '';
        let label = node.tagName;
        if (node.tagName === 'LDevice') {
            badge = 'LD';
            label = node.getAttribute('inst') ?? getNameAttribute(node) ?? 'LDevice';
        }
        else if (node.tagName === 'LN' || node.tagName === 'LN0') {
            badge = 'LN';
            label = node.getAttribute('lnClass') ?? node.tagName;
        }
        else if (node.tagName === 'DO' || node.tagName === 'SDO') {
            badge = 'DO';
            const fc = findDOTypeElement(node)
                ?.querySelector(':scope > DA[fc]')
                ?.getAttribute('fc');
            label = `${getNameAttribute(node) ?? node.tagName}${fc ? ` [${fc}]` : ''}`;
        }
        else if (node.tagName === 'DA' || node.tagName === 'BDA') {
            badge = 'DA';
            const bType = node.getAttribute('bType');
            label = `${getNameAttribute(node) ?? node.tagName}${bType ? ` (${bType})` : ''}`;
        }
        return badge
            ? html `<span class="node-badge">${badge}</span>${label}`
            : html `${label}`;
    }
    renderHierarchy() {
        const selectedIed = this.selectedIed;
        if (!selectedIed)
            return html ``;
        return html `<div
      class="ied-layout"
      style="--tree-width: ${this.treeWidth ? `${this.treeWidth}px` : '30%'}"
    >
      <nav class="hierarchy" aria-label="SCL hierarchy">
        <ul>
          ${this.renderTreeNode(selectedIed)}
        </ul>
      </nav>
      <div
        class="resize-handle"
        role="separator"
        aria-orientation="vertical"
        @pointerdown=${this.resizeTree}
      ></div>
      <div class="details">
        <table>
          <thead>
            <tr>
              <th scope="col">Element</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            ${this.tableRows().map(({ node, depth }) => {
            const hasChildren = this.hasChildren(node);
            const expanded = this.expandedTableNodes.includes(node);
            return html `<tr data-tag="${node.tagName}">
                <td style="padding-left: ${8 + depth * 20}px">
                  ${hasChildren
                ? html `<button
                        class="table-toggle"
                        aria-label="${expanded
                    ? 'Collapse'
                    : 'Expand'} ${this.nodeLabel(node)}"
                        @click=${() => this.toggleNode(node, false)}
                      >
                        ${expanded ? '−' : '+'}
                      </button>`
                : nothing}
                  ${this.renderTableElement(node)}
                </td>
                <td>
                  ${getNameAttribute(node) ??
                node.getAttribute('inst') ??
                node.getAttribute('lnClass') ??
                ''}
                </td>
                <td>${getDescriptionAttribute(node) ?? ''}</td>
              </tr>`;
        })}
          </tbody>
        </table>
      </div>
    </div>`;
    }
    renderIEDList() {
        const iedList = this.iedList;
        if (iedList.length === 0) {
            return html `<h1>
        <span style="color: var(--base1)"
          >${translate('iededitor.missing')}</span
        >
      </h1>`;
        }
        return html `<section>
      <div class="header">
        <h1>${translate('filters')}:</h1>
        <oscd-filter-button
          id="iedFilter"
          icon="developer_board"
          .header=${translate('iededitor.iedSelector')}
          @selected-items-changed="${(e) => this.onSelectionChange(e.detail.selectedItems)}"
        >
          ${iedList.map(ied => {
            const name = getNameAttribute(ied);
            const descr = getDescriptionAttribute(ied);
            const type = ied.getAttribute('type');
            const manufacturer = ied.getAttribute('manufacturer');
            return html ` <mwc-radio-list-item
              value="${name}"
              ?twoline="${type && manufacturer}"
              ?selected="${this.selectedIEDs.includes(name ?? '')}"
            >
              ${name} ${descr ? html ` (${descr})` : html ``}
              <span slot="secondary">
                ${type} ${type && manufacturer ? html `&mdash;` : nothing}
                ${manufacturer}
              </span>
            </mwc-radio-list-item>`;
        })}
        </oscd-filter-button>

        <oscd-filter-button
          id="lnClassesFilter"
          multi="true"
          .header="${translate('iededitor.lnFilter')}"
          @selected-items-changed="${(e) => {
            this.selectedLNClasses = e.detail.selectedItems;
            this.requestUpdate('selectedIed');
        }}"
        >
          <span slot="icon">${getIcon('lNIcon')}</span>
          ${this.lnClassList.map(lnClassInfo => {
            const value = lnClassInfo[0];
            const label = lnClassInfo[1];
            return html `<mwc-check-list-item
              value="${value}"
              ?selected="${this.selectedLNClasses.includes(value)}"
            >
              ${label}
            </mwc-check-list-item>`;
        })}
        </oscd-filter-button>

        <element-path class="elementPath"></element-path>
      </div>

      ${this.renderHierarchy()}
    </section>`;
    }
    render() {
        return html `<div>
      <mwc-button
        class="add-ied-button"
        icon="add"
        @click=${() => this.createIedDialog.show()}
      >
        ${translate('iededitor.createIed')}
      </mwc-button>
      ${this.renderIEDList()}
      <create-ied-dialog
        .doc=${this.doc}
        .onConfirm=${(iedName) => this.createVirtualIED(iedName)}
      ></create-ied-dialog>
      <add-access-point-dialog
        id="treeAddAccessPointDialog"
        .doc=${this.doc}
        .ied=${this.treeActionNode}
        .onConfirm=${(data) => this.createAccessPoint(data)}
      ></add-access-point-dialog>
      <add-ldevice-dialog
        id="treeAddLDeviceDialog"
        .server=${this.treeActionNode}
        .onConfirm=${(data) => this.createLDevice(data)}
      ></add-ldevice-dialog>
      <add-ln-dialog
        id="treeAddLnDialog"
        .doc=${this.doc}
        .onConfirm=${(data) => this.createLN(data)}
      ></add-ln-dialog>
    </div>`;
    }
}
IedPlugin.styles = css `
    :host {
      --mdc-theme-background: #ffffff;
      --mdc-theme-surface: #ffffff;
      --mdc-theme-on-surface: #0f172a;
      --mdc-theme-primary: #1d4ed8;
      --mdc-theme-on-primary: #ffffff;
      --mdc-theme-text-hint-on-background: #cbd5e1;
      background: #ffffff;
      color: #1f2937;
      display: block;
      min-height: 100vh;
      position: relative;
    }

    section {
      background: #ffffff;
      padding: 8px 12px 16px;
    }

    .header {
      display: flex;
    }

    h1 {
      color: #0f172a;
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin: 0px;
      line-height: 48px;
      padding-left: 0.3em;
    }

    .elementPath {
      margin-left: auto;
      padding-right: 12px;
    }

    .add-ied-button {
      display: block;
      float: right;
      margin: 8px 12px 0 0;
    }

    .ied-layout {
      display: grid;
      grid-template-columns: minmax(220px, var(--tree-width)) 8px minmax(0, 1fr);
      gap: 8px;
      height: calc(100vh - 112px);
      margin-top: 8px;
      min-height: 480px;
    }

    .hierarchy {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 10px;
      min-height: 0;
      overflow: auto;
    }

    .resize-handle {
      cursor: col-resize;
      position: relative;
    }

    .resize-handle::after {
      background: #cbd5e1;
      border-radius: 999px;
      content: '';
      inset: 0 3px;
      position: absolute;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .tree-row {
      box-sizing: border-box;
      display: flex;
      width: 100%;
    }

    .tree-toggle,
    .table-toggle {
      background: transparent;
      border: 0;
      color: #64748b;
      min-width: 28px;
      cursor: pointer;
    }

    .tree-spacer {
      width: 28px;
    }

    .tree-node {
      border: 0;
      background: transparent;
      color: #334155;
      cursor: pointer;
      flex: 1;
      min-width: 0;
      overflow: hidden;
      padding: 6px 8px;
      text-align: left;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .tree-node[aria-current] {
      background: #eff6ff;
      color: #1d4ed8;
      font-weight: 600;
    }

    .tree-actions {
      align-items: center;
      display: flex;
      flex: none;
      margin-left: auto;
    }

    .tree-actions {
      display: flex;
      margin-left: auto;
    }

    .tree-actions mwc-icon-button {
      --mdc-icon-button-size: 32px;
      --mdc-icon-size: 18px;
    }

    .details {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 10px;
      min-height: 0;
      min-width: 0;
      overflow: auto;
    }

    table {
      border-collapse: collapse;
      color: #1f2937;
      width: 100%;
    }

    th {
      background: #f1f5f9;
      color: #0f172a;
      font-weight: 700;
    }

    th,
    td {
      border-bottom: 1px solid #e2e8f0;
      padding: 6px 8px;
      text-align: left;
    }

    .node-badge {
      background: #1976d2;
      border-radius: 3px;
      color: #ffffff;
      display: inline-block;
      font-size: 12px;
      font-weight: 700;
      line-height: 20px;
      margin-right: 8px;
      min-width: 24px;
      text-align: center;
    }

    @media (max-width: 700px) {
      .ied-layout {
        grid-template-columns: 1fr;
        height: auto;
      }

      .resize-handle {
        display: none;
      }

      .hierarchy {
        max-height: 35vh;
      }
    }
  `;
__decorate([
    property()
], IedPlugin.prototype, "doc", void 0);
__decorate([
    property({ type: Number })
], IedPlugin.prototype, "editCount", void 0);
__decorate([
    property()
], IedPlugin.prototype, "nsdoc", void 0);
__decorate([
    property()
], IedPlugin.prototype, "oscdApi", void 0);
__decorate([
    query('create-ied-dialog')
], IedPlugin.prototype, "createIedDialog", void 0);
__decorate([
    query('#treeAddAccessPointDialog')
], IedPlugin.prototype, "treeAddAccessPointDialog", void 0);
__decorate([
    query('#treeAddLDeviceDialog')
], IedPlugin.prototype, "treeAddLDeviceDialog", void 0);
__decorate([
    query('#treeAddLnDialog')
], IedPlugin.prototype, "treeAddLnDialog", void 0);
__decorate([
    state()
], IedPlugin.prototype, "selectedIEDs", void 0);
__decorate([
    state()
], IedPlugin.prototype, "selectedLNClasses", void 0);
__decorate([
    state()
], IedPlugin.prototype, "selectedHierarchyNode", void 0);
__decorate([
    state()
], IedPlugin.prototype, "expandedTreeNodes", void 0);
__decorate([
    state()
], IedPlugin.prototype, "expandedTableNodes", void 0);
__decorate([
    state()
], IedPlugin.prototype, "treeActionNode", void 0);
__decorate([
    state()
], IedPlugin.prototype, "treeWidth", void 0);
__decorate([
    state()
], IedPlugin.prototype, "iedList", null);
__decorate([
    state()
], IedPlugin.prototype, "lnClassList", null);
__decorate([
    state()
], IedPlugin.prototype, "selectedIed", null);
//# sourceMappingURL=IED.js.map