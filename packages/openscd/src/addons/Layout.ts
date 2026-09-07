import {
  customElement,
  html,
  LitElement,
  property,
  state,
  TemplateResult,
  query,
  css,
} from 'lit-element';
import { get } from 'lit-translate';
import { classMap } from 'lit-html/directives/class-map.js';
import { newPendingStateEvent } from '@compas-oscd/core';
import { newSettingsUIEvent } from '@compas-oscd/core';
import { OscdApi } from '@compas-oscd/core';
import { XMLEditor } from '@openscd/oscd-editor';
import {
  MenuItem,
  Validator,
  MenuPlugin,
  pluginIcons,
  OpenSCD
} from '../open-scd.js';

import {
  Plugin,
  ContentContext,
  PluginKind
} from "../plugin.js"

import {
  HistoryUIKind,
  newEmptyIssuesEvent,
  newHistoryUIEvent
} from './History.js';
import type { Drawer } from '@material/mwc-drawer';
import type { ActionDetail } from '@material/mwc-list';
import { List } from '@material/mwc-list';
import type { ListItem } from '@material/mwc-list/mwc-list-item';

import '@material/mwc-drawer';
import '@material/mwc-list';
import '@material/mwc-dialog';
import '@material/mwc-switch';
import '@material/mwc-select';
import '@material/mwc-textfield';
import { pluginTag } from '../plugin-tag.js';

import {OscdPluginManager} from "./plugin-manager/plugin-manager.js";
import "./plugin-manager/plugin-manager.js";
import {OscdCustomPluginDialog} from "./plugin-manager/custom-plugin-dialog.js";
import "./plugin-manager/custom-plugin-dialog.js";
import "./menu-tabs/menu-tabs.js";
import { TabActivatedEvent } from "./menu-tabs/menu-tabs.js";

/**
 * This is a template literal tag function. See:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates
 *
 * Passes its arguments to LitElement's `html` tag after combining the first and
 * last expressions with the first two and last two static strings.
 * Throws unless the first and last expressions are identical strings.
 *
 * We need this to get around the expression location limitations documented in
 * https://lit.dev/docs/templates/expressions/#expression-locations
 *
 * After upgrading to Lit 2 we can use their static HTML functions instead:
 * https://lit.dev/docs/api/static-html/
 */
function staticTagHtml(
  oldStrings: ReadonlyArray<string>,
  ...oldArgs: unknown[]
): TemplateResult {
  const args = [...oldArgs];
  const firstArg = args.shift();
  const lastArg = args.pop();

  if (firstArg !== lastArg)
    throw new Error(
      `Opening tag <${firstArg}> does not match closing tag </${lastArg}>.`
    );

  const strings = [...oldStrings] as string[] & { raw: string[] };
  const firstString = strings.shift();
  const secondString = strings.shift();

  const lastString = strings.pop();
  const penultimateString = strings.pop();

  strings.unshift(`${firstString}${firstArg}${secondString}`);
  strings.push(`${penultimateString}${lastArg}${lastString}`);

  return html(<TemplateStringsArray>strings, ...args);
}

interface RenderAblePlugin {
  src?: string;
  kind: string;
  content?: ContentContext;
}

@customElement('oscd-layout')
export class OscdLayout extends LitElement {

  /** The `XMLDocument` to be edited */
  @property({ attribute: false }) doc: XMLDocument | null = null;
  /** The name of the current [[`doc`]] */
  @property({ type: String }) docName = '';
  /** Index of the last [[`EditorAction`]] applied. */
  @property({ type: Number }) editCount = -1;

  /** XML Editor to apply changes to the scd */
  @property({ type: Object }) editor!: XMLEditor;

  /** The plugins to render the layout. */
  @property({ type: Array }) plugins: Plugin[] = [];

  /** The open-scd host element */
  @property({ type: Object }) host!: OpenSCD;

  @state() validated: Promise<void> = Promise.resolve();
  @state() shouldValidate = false;
  @state() activeEditor: Plugin | undefined = this.calcActiveEditors()[0];

  @query('#menu') menuUI!: Drawer;
  @query('#menuContent') menuContent!: List;
  @query('#pluginManager') pluginUI!: OscdPluginManager;
  @query('#pluginList') pluginList!: List;
  @query('#pluginAdd') pluginDownloadUI!: OscdCustomPluginDialog;


  render(): TemplateResult {
    return html`
      <div
        @open-plugin-download=${() => this.pluginDownloadUI.show()}
        @oscd-activate-editor=${this.handleActivateEditorByEvent}
        @oscd-run-menu=${this.handleRunMenuByEvent}
      >
        <slot></slot>
        ${this.renderHeader()} ${this.renderAside()} ${this.renderMenuContent()}
        ${this.renderContent()} ${this.renderLanding()} ${this.renderPlugging()}
      </div>
    `;
  }

  protected componentHtml(strings: TemplateStringsArray, ...values: unknown[]): TemplateResult {
    return html(strings, ...values);
  }


  private renderPlugging(): TemplateResult {
    return html` ${this.renderPluginUI()} ${this.renderDownloadUI()} `;
  }

  private getMenuContent(src: string) {
    const tag = pluginTag(src);
    return this.menuContent.querySelector(tag);
  }

  /** Renders the "Add Custom Plug-in" UI*/
  protected renderDownloadUI(): TemplateResult {
    return html`
      <oscd-custom-plugin-dialog id="pluginAdd"></oscd-custom-plugin-dialog>
    `
  }

  /**
   * Renders the plug-in management UI (turning plug-ins on/off)
   */
  protected renderPluginUI(): TemplateResult {
    return html`
      <oscd-plugin-manager id="pluginManager" .plugins=${this.plugins}></oscd-plugin-manager>
    `
  }

  // Computed properties

  get validators(): Plugin[] {
    return this.plugins.filter(
      plugin => plugin.active && plugin.kind === 'validator'
    );
  }
  get menuEntries(): Plugin[] {
    return this.plugins.filter(
      plugin => plugin.active && plugin.kind === 'menu'
    );
  }
  get topMenu(): Plugin[] {
    return this.menuEntries.filter(plugin => plugin.position === 'top');
  }
  get middleMenu(): Plugin[] {
    return this.menuEntries.filter(plugin => plugin.position === 'middle');
  }
  get bottomMenu(): Plugin[] {
    return this.menuEntries.filter(plugin => plugin.position === 'bottom');
  }


  get menu(): (MenuItem | 'divider')[] {

    const topMenu = this.generateMenu(this.topMenu, 'top');
    const middleMenu = this.generateMenu(this.middleMenu, 'middle');
    const bottomMenu = this.generateMenu(this.bottomMenu, 'bottom');
    const validators = this.generateValidatorMenus(this.validators);
    const canUndo = this.editor.past.length > 0;
    const canRedo = this.editor.future.length > 0;

    if (middleMenu.length > 0) middleMenu.push('divider');
    if (bottomMenu.length > 0) bottomMenu.push('divider');

    return [
      'divider',
      ...topMenu,
      'divider',
      {
        icon: 'undo',
        name: 'undo',
        actionItem: true,
        action: (): void => {
          this.editor.undo();
        },
        disabled: (): boolean => !canUndo,
        kind: 'static',
        content: { tag: '' },
      },
      {
        icon: 'redo',
        name: 'redo',
        actionItem: true,
        action: (): void => {
          this.editor.redo();
        },
        disabled: (): boolean => !canRedo,
        kind: 'static',
        content: { tag: '' },
      },
      ...validators,
      {
        icon: 'list',
        name: 'menu.viewLog',
        actionItem: true,
        action: (): void => {
          this.dispatchEvent(newHistoryUIEvent(true, HistoryUIKind.log));
        },
        kind: 'static',
        content: { tag: '' },
      },
      {
        icon: 'history',
        name: 'menu.viewHistory',
        actionItem: true,
        action: (): void => {
          this.dispatchEvent(newHistoryUIEvent(true, HistoryUIKind.history));
        },
        kind: 'static',
        content: { tag: '' },
      },
      {
        icon: 'rule',
        name: 'menu.viewDiag',
        actionItem: true,
        action: (): void => {
          this.dispatchEvent(newHistoryUIEvent(true, HistoryUIKind.diagnostic));
        },
        kind: 'static',
        content: { tag: '' },
      },
      'divider',
      ...middleMenu,
      {
        icon: 'settings',
        name: 'settings.title',
        action: (): void => {
          this.dispatchEvent(newSettingsUIEvent(true));
        },
        kind: 'static',
        content: { tag: '' },
      },
      ...bottomMenu,
      {
        icon: 'extension',
        name: 'plugins.heading',
        action: (): void => this.pluginUI.show(),
        kind: 'static',
        content: { tag: '' },
      },
    ];
  }

  get editors(): Plugin[] {
    return this.plugins.filter(
      plugin => plugin.active && plugin.kind === 'editor'
    );
  }

  // Keyboard Shortcuts
  private handleKeyPress(e: KeyboardEvent): void {
    // currently we only handley key shortcuts when users press ctrl
    if(!e.ctrlKey){ return }

    const keyFunctionMap: {[key:string]: () => void} = {
      'm': () => this.menuUI.open = !this.menuUI.open,
      'o': () => this.menuUI.querySelector<ListItem>('mwc-list-item[iconid="folder_open"]')?.click(),
      'O': () => this.menuUI.querySelector<ListItem>('mwc-list-item[iconid="create_new_folder"]')?.click(),
      's': () => this.menuUI.querySelector<ListItem>('mwc-list-item[iconid="save"]')?.click(),
      'P': () => this.pluginUI.show(),
    }

    const fn = keyFunctionMap[e.key];
    if(!fn){ return; }

    e.preventDefault();
    fn();
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.host.addEventListener('close-drawer', async () => {
      this.menuUI.open = false;
    });
    this.host.addEventListener('validate', async () => {
      this.shouldValidate = true;
      await this.validated;

      if (!this.shouldValidate){ return; }

      this.shouldValidate = false;

      this.validated = Promise.allSettled(
        this.menuUI
          .querySelector('mwc-list')!
          .items.filter(item => item.className === 'validator')
          .map(item => {
            const src = item.dataset.src ?? '';
            const menuContentElement = this.getMenuContent(src);

            if (!menuContentElement) {
              return;
            }

            this.dispatchEvent(newEmptyIssuesEvent(src));

            return (menuContentElement as unknown as Validator).validate()
          })
      ).then();
      this.dispatchEvent(newPendingStateEvent(this.validated));
    });
    this.handleKeyPress = this.handleKeyPress.bind(this);
    document.onkeydown = this.handleKeyPress;

    document.addEventListener("open-plugin-download", () => {
      this.pluginDownloadUI.show();
    });
  }


  private generateMenu(plugins:Plugin[], kind: 'top' | 'middle' | 'bottom'): (MenuItem | 'divider')[]{
    return plugins.map(plugin => {
      return {
        icon: plugin.icon || pluginIcons['menu'],
        name: plugin.name,
        src: plugin.src,
        action: ae => {
          const menuContentElement = this.getMenuContent(plugin.src);
          if (!menuContentElement) {
            return;
          }

          this.dispatchEvent(newPendingStateEvent((menuContentElement as unknown as MenuPlugin).run()))
        },
        disabled: (): boolean => plugin.requireDoc! && this.doc === null,
        content: plugin.content ?? { tag: '' },
        kind: kind,
      }
    })
  }

  private generateValidatorMenus(plugins: Plugin[]): (MenuItem | 'divider')[] {
    return plugins.map(plugin =>{
      return {
        icon: plugin.icon || pluginIcons['validator'],
        name: plugin.name,
        src: plugin.src,
        action: ae => {
          this.dispatchEvent(newEmptyIssuesEvent(plugin.src));

          const menuContentElement = this.getMenuContent(plugin.src);
          if (!menuContentElement) {
            return;
          }

          this.dispatchEvent(newPendingStateEvent((menuContentElement as unknown as Validator).validate()))
        },
        disabled: (): boolean => this.doc === null,
        content: plugin.content ?? { tag: '' },
        kind: 'validator',
      }
    });
  }

  private renderMenuItem(me: MenuItem | 'divider'): TemplateResult {
    const isDivider = me === 'divider';
    const hasActionItem = me !== 'divider' && me.actionItem;

    if (isDivider) { return html`<li divider padded role="separator"></li>`; }
    if (hasActionItem){ return html``; }
    return html`
      <mwc-list-item
        class="${me.kind}"
        iconid="${me.icon}"
        graphic="icon"
        data-name="${me.name}"
        data-src="${me.src ?? ''}"
        .disabled=${me.disabled?.() || !me.action}
        ><mwc-icon slot="graphic">${me.icon}</mwc-icon>
        <span>${get(me.name)}</span>
        ${me.hint
          ? html`<span slot="secondary"><tt>${me.hint}</tt></span>`
          : ''}
      </mwc-list-item>
    `;
  }

  protected renderActionItem(me: MenuItem | 'divider'): TemplateResult {
    if(me === 'divider' || !me.actionItem){ return html`` }

    return html`
    <mwc-icon-button
      slot="actionItems"
      icon="${me.icon}"
      label="${me.name}"
      ?disabled=${me.disabled?.() || !me.action}
      @click=${me.action}
    ></mwc-icon-button>`;
  }

  private renderEditorTab({ name, icon }: Plugin): TemplateResult {
    return html`<mwc-tab label=${name} icon=${icon || 'edit'}> </mwc-tab>`;
  }

  /** Renders top bar which features icon buttons for undo, redo, log, scl history and diagnostics*/
  protected renderHeader(): TemplateResult {
    return html`<mwc-top-app-bar-fixed>
      <mwc-icon-button
        icon="menu"
        label="Menu"
        slot="navigationIcon"
        @click=${() => (this.menuUI.open = true)}
      ></mwc-icon-button>
      ${this.renderTitle()}
      ${this.renderActionItems()}
    </mwc-top-app-bar-fixed>`;
  }

  /**
   * Renders the title section in the top bar
   * Make sure to use slot="title" for the returned template
   */
  protected renderTitle(): TemplateResult {
    return html`<div slot="title" id="title">
      <img class="brand-logo" src="/at-scd-logo.png?v=2" alt="AT SCD" />
      <span class="workspace-name">${this.docName || 'Engineering Workspace'}</span>
    </div>`;
  }

  /**
   * Renders the action items for the top bar
   * Make sure to use slot="actionItems" for each element
   */
  protected renderActionItems(): TemplateResult {
    return  html`${this.menu.map(this.renderActionItem)}`;
  }

  protected renderMenuContent(): TemplateResult {
    return html`
      <div id="menuContent">
        ${
          this.menu
            .filter(p => (p as MenuItem).content)
            .map(p => this.renderPluginContent((p as MenuItem)))
        }
      </div>
    `;
  }

  /**
   * Renders a drawer toolbar featuring the scl filename, enabled menu plugins,
   * settings, help, scl history and plug-ins management
   */
  protected renderAside(): TemplateResult {

    return html`
      <mwc-drawer class="mdc-theme--surface" hasheader type="modal" id="menu">
        <span slot="title">${get('menu.title')}</span>
          ${renderTitle(this.docName)}
        <mwc-list
          wrapFocus
          @action=${makeListAction(this.menu)}
        >
          ${this.menu.map(this.renderMenuItem)}
        </mwc-list>
      </mwc-drawer>
    `;

    function renderTitle(docName?: string){
      if(!docName) return html``;

      return html`<span slot="subtitle">${docName}</span>`;
    }

    function makeListAction(menuItems : (MenuItem|'divider')[]){
      return function listAction(ae: CustomEvent<ActionDetail>){
        //FIXME: dirty hack to be fixed in open-scd-core
        //       if clause not necessary when oscd... components in open-scd not list
        if (ae.target instanceof List)
          (<MenuItem>(
            menuItems.filter(
              item => item !== 'divider' && !item.actionItem
            )[ae.detail.index]
          ))?.action?.(ae);
      }
    }


  }

  private calcActiveEditors(){
    const hasActiveDoc = Boolean(this.doc);

    return this.editors
      .filter(editor => {
        // this is necessary because `requireDoc` can be undefined
        // and that is not the same as false
        const doesNotRequireDoc = editor.requireDoc === false
        return doesNotRequireDoc || hasActiveDoc
      })
  }

  /** Renders the enabled editor plugins and a tab bar to switch between them*/
  protected renderContent(): TemplateResult {

    const activeEditors = this.calcActiveEditors()
      .map(this.renderEditorTab)

    const hasActiveEditors = activeEditors.length > 0;
    if(!hasActiveEditors){ return html``; }

    const renderEditorContent = (doc: XMLDocument | null, activeEditor?: Plugin) => {
      const editor = activeEditor;
      const requireDoc = editor?.requireDoc
      if(requireDoc && !doc) { return html`` }

      const tag = editor?.content?.tag;
      if(!tag) { return html`` }

      return this.renderPluginContent(editor);
    }

    return html`
      <oscd-menu-tabs
        .editors=${this.calcActiveEditors()}
        .activeEditor=${this.activeEditor}
        @oscd-editor-tab-activated=${this.handleEditorTabActivated}
      >
      </oscd-menu-tabs>
      ${renderEditorContent(this.doc, this.activeEditor, )}
    `;
  }

  private handleEditorTabActivated(e: TabActivatedEvent){
    this.activeEditor = e.detail.editor
  }

  private handleActivateEditorByEvent(e: CustomEvent<{name: string, src: string}>): void {
    const {name, src} = e.detail;
    const editors = this.calcActiveEditors()
    const wantedEditor = editors.find(editor => editor.name === name || editor.src === src)
    if(!wantedEditor){ return; } // TODO: log error

    this.activeEditor = wantedEditor;
  }

  private handleRunMenuByEvent(e: CustomEvent<{name: string}>): void {

    // TODO: this is a workaround, fix it
    this.menuUI.open = true;
    const menuEntry = this.menuUI.querySelector(`[data-name="${e.detail.name}"]`) as HTMLElement

    const menuContentElement = this.getMenuContent(menuEntry.dataset.src ?? '');
    if (!menuContentElement) {
      return;
    }

    (menuContentElement as unknown as MenuPlugin).run();
  }

  /**
   * Renders the landing buttons (open project and new project)
   * it no document loaded we display the menu item that are in the position
   * 'top' and are not disabled
   *
   * To enable replacement of this part we have to convert it to either an addon
   * or a plugin
   */
  protected renderLanding(): TemplateResult {
    if(this.doc){ return html``; }

    return html`
      <section class="landing">
        <div class="landing-panel">
          <img class="landing-logo" src="/at-scd-logo.png?v=2" alt="AT SCD" />
          <h1>Substation configuration starts here</h1>
          <p>Open, create, and engineer IEC 61850 SCL projects in one workspace.</p>
          <div class="landing-actions">
            ${renderMenuItems(this.menu, this.menuUI)}
          </div>
        </div>
      </section>`

      function renderMenuItems(menuItemsAndDividers: (MenuItem | 'divider')[], menuUI: Drawer){

        const menuItems = menuItemsAndDividers.filter(mi => mi !== 'divider') as MenuItem[];

        return menuItems.map((mi: MenuItem, index) => {
            if(mi.kind !== 'top' || mi.disabled?.()) { return html``; }

            return html`
              <button
                class="landing-action"
                type="button"
                @click="${() => clickListItem(index)}"
              >
                <mwc-icon class="landing-action-icon">${mi.icon}</mwc-icon>
                <span>
                  <strong>${mi.name}</strong>
                  <small>${mi.name === 'Open project'
                    ? 'Choose an existing SCL configuration.'
                    : 'Create a new SCL engineering project.'}</small>
                </span>
              </button>
            `
          })

          function clickListItem(index:number) {
            const listItem = menuUI.querySelector('mwc-list')!.items[index];
            listItem.click();
          }

      }
    }

    protected renderPluginContent(plugin: RenderAblePlugin): TemplateResult {
      const tag = plugin.content?.tag ?? '';

      if (!tag) {
        return html``;
      }

      const osdcApi = new OscdApi(tag);
      return staticTagHtml`<${tag}
          .doc=${this.doc}
          .docName=${this.docName}
          .editCount=${this.editCount}
          .plugins=${this.host.storedPlugins}
          .docId=${this.host.docId}
          .pluginId=${plugin.src}
          .nsdoc=${this.host.nsdoc}
          .docs=${this.host.docs}
          .locale=${this.host.locale}
          .oscdApi=${osdcApi}
          .editor=${this.editor}
          class="${classMap({
            plugin: true,
            menu: plugin.kind === 'menu',
            validator: plugin.kind === 'validator',
            editor: plugin.kind === 'editor',
          })}"
        ></${tag}>`
    }




  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
      color: var(--oscd-base01);
      font-family: var(--oscd-text-font), Roboto, Arial, sans-serif;
    }

    mwc-drawer {
      position: absolute;
      top: 0;
      --mdc-theme-surface: var(--oscd-base3);
      --mdc-drawer-fill-color: var(--oscd-base3);
      --mdc-drawer-heading-ink-color: var(--oscd-base03);
      --mdc-drawer-item-activated-fill-color: #eff6ff;
      --mdc-drawer-item-activated-ink-color: #1d4ed8;
      --mdc-list-side-padding: 10px;
      --mdc-list-item-graphic-margin: 12px;
      border-radius: 0 12px 12px 0;
    }

    mwc-top-app-bar-fixed {
      --mdc-theme-text-disabled-on-light: rgba(255, 255, 255, 0.38);
      --mdc-theme-primary: #1e3c72;
      --mdc-theme-on-primary: #ffffff;
      --mdc-top-app-bar-fill-color: #1e3c72;
      --mdc-top-app-bar-ink-color: #ffffff;
      --mdc-top-app-bar-section-fill-color: #1e3c72;
      box-shadow: 0 2px 12px rgba(15, 45, 92, 0.28);
    } /* hack to fix disabled icon buttons rendering black */

    #title {
      align-items: center;
      display: flex;
      gap: 12px;
      letter-spacing: 0.01em;
    }

    .brand-logo {
      background: #ffffff;
      border-radius: 5px;
      height: 28px;
      padding: 3px 7px;
      width: 105px;
    }

    .workspace-name {
      border-left: 1px solid rgba(255, 255, 255, 0.3);
      font-size: 13px;
      font-weight: 400;
      opacity: 0.9;
      padding-left: 12px;
    }

    mwc-tab {
      background-color: var(--oscd-base3);
      --mdc-theme-primary: #1d4ed8;
      --mdc-tab-text-label-color-default: var(--oscd-base00);
      --mdc-tab-text-label-color-active: #1d4ed8;
    }

    input[type='file'] {
      display: none;
    }

    mwc-dialog {
      --mdc-dialog-max-width: 98vw;
      --mdc-theme-surface: var(--oscd-base3);
      --mdc-dialog-scrim-color: rgba(15, 45, 92, 0.18);
      --mdc-shape-medium: 12px;
    }

    mwc-dialog > form {
      display: flex;
      flex-direction: column;
    }

    mwc-dialog > form > * {
      display: block;
      margin-top: 16px;
    }

    mwc-linear-progress {
      position: fixed;
      --mdc-linear-progress-buffer-color: #1e3c72;
      --mdc-theme-primary: var(--cyan);
      left: 0px;
      top: 0px;
      width: 100%;
      pointer-events: none;
      z-index: 1000;
    }

    tt {
      font-family: 'Roboto Mono', monospace;
      font-weight: 300;
    }

    #menuContent {
      height: 0px;
    }

    .landing {
      align-items: center;
      background: linear-gradient(160deg, #f8fbff, #edf4fd 52%, #f5f9ff);
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      min-height: 100vh;
      overflow: hidden;
      padding: 88px 24px 24px;
      position: relative;
    }

    .landing::before,
    .landing::after {
      border-radius: 50%;
      content: '';
      pointer-events: none;
      position: absolute;
    }

    .landing::before {
      background: radial-gradient(circle at 30% 30%, rgba(86, 154, 236, 0.22), transparent 70%);
      height: 460px;
      left: -160px;
      top: -180px;
      width: 460px;
    }

    .landing::after {
      background: radial-gradient(circle at 35% 35%, rgba(34, 85, 158, 0.18), transparent 70%);
      bottom: -240px;
      height: 520px;
      right: -220px;
      width: 520px;
    }

    .landing-panel {
      background: linear-gradient(155deg, rgba(247, 252, 255, 0.82), rgba(233, 244, 255, 0.72));
      backdrop-filter: blur(14px) saturate(118%);
      border: 1px solid rgba(167, 197, 233, 0.74);
      border-radius: 18px;
      box-shadow: 0 14px 28px rgba(23, 54, 104, 0.18);
      box-sizing: border-box;
      max-width: 520px;
      padding: 32px;
      position: relative;
      text-align: center;
      width: 100%;
      z-index: 1;
    }

    .landing-logo {
      height: auto;
      max-width: 220px;
      width: 100%;
    }

    .landing h1 {
      color: #123f79;
      font-size: clamp(26px, 5vw, 34px);
      line-height: 1.15;
      margin: 22px 0 10px;
    }

    .landing p {
      color: #475569;
      font-size: 15px;
      line-height: 1.6;
      margin: 0;
    }

    .landing-actions {
      display: grid;
      gap: 12px;
      margin-top: 30px;
    }

    .landing-action {
      align-items: center;
      background: linear-gradient(130deg, #1e3c72, #2a5298);
      border: 0;
      border-radius: 12px;
      box-shadow: 0 10px 20px rgba(34, 76, 140, 0.2);
      color: #ffffff;
      cursor: pointer;
      display: flex;
      font: inherit;
      gap: 14px;
      padding: 15px 18px;
      text-align: left;
      transition: transform 180ms ease, box-shadow 180ms ease;
      width: 100%;
    }

    .landing-action:hover {
      box-shadow: 0 14px 24px rgba(34, 76, 140, 0.28);
      transform: translateY(-1px);
    }

    .landing-action:focus-visible {
      outline: 3px solid rgba(0, 210, 255, 0.7);
      outline-offset: 3px;
    }

    .landing-action-icon {
      font-size: 28px;
    }

    .landing-action strong,
    .landing-action small {
      display: block;
    }

    .landing-action strong {
      font-size: 15px;
    }

    .landing-action small {
      font-size: 12px;
      margin-top: 3px;
      opacity: 0.82;
    }

    @media (max-width: 480px) {
      .landing {
        padding: 80px 16px 16px;
      }

      .landing-panel {
        padding: 24px;
      }
    }

    .plugin.menu {
      display: flex;
    }

    .plugin.validator {
      display: flex;
    }
  `;
}
