import { __decorate } from "tslib";
import { get } from 'lit-translate';
import { css, customElement, html } from 'lit-element';
import '@omicronenergy/oscd-ui/icon/oscd-icon.js';
import '@omicronenergy/oscd-ui/fab/oscd-fab.js';
import './subnetwork-container.js';
import { compareNames, newWizardEvent, } from '@compas-oscd/open-scd/dist/foundation.js';
import { createElement } from '@compas-oscd/xml';
import { newActionEvent } from '@compas-oscd/core';
import { createSubNetworkWizard } from './wizards/subnetwork.js';
import { Base104Container } from './base-container.js';
import { getTypeAttribute } from './foundation/foundation.js';
let Network104Container = class Network104Container extends Base104Container {
    getSubNetworkElements() {
        return Array.from(this.doc.querySelectorAll('Communication > SubNetwork') ?? [])
            .filter(network => getTypeAttribute(network) === '104')
            .sort((a, b) => compareNames(a, b));
    }
    /** Opens a [[`WizardDialog`]] for creating a new `SubNetwork` element. */
    openCreateSubNetworkWizard() {
        const parent = this.doc.querySelector(':root > Communication');
        if (!parent) {
            this.dispatchEvent(newActionEvent({
                new: {
                    parent: this.doc.documentElement,
                    element: createElement(this.doc, 'Communication', {}),
                },
            }));
        }
        this.dispatchEvent(newWizardEvent(createSubNetworkWizard(parent)));
    }
    render() {
        return html `<oscd-fab
        extended
        label="${get('subnetwork.wizard.title.add')}"
        @click=${() => this.openCreateSubNetworkWizard()}
      >
        <oscd-icon slot="icon">add</oscd-icon>
      </oscd-fab>
      <section>
        ${this.getSubNetworkElements().map(subnetwork => html `<subnetwork-104-container
              .doc="${this.doc}"
              .element=${subnetwork}
            ></subnetwork-104-container>`)}
      </section>`;
    }
};
Network104Container.styles = css `
    :host {
      width: 100vw;
    }

    oscd-fab {
      position: fixed;
      bottom: 32px;
      right: 32px;
    }

    subnetwork-104-container {
      margin: 8px 12px 16px;
    }
  `;
Network104Container = __decorate([
    customElement('network-104-container')
], Network104Container);
export { Network104Container };
//# sourceMappingURL=network-container.js.map