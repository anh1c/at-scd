import { LitElement, TemplateResult } from 'lit-element';
import '@material/mwc-fab';
import '@material/mwc-radio';
import '@material/mwc-formfield';
import { RadioListItem } from '@material/mwc-list/mwc-radio-list-item';
import './protocol104/network-container.js';
import './protocol104/values-container.js';
import './protocol104/dialogs/dialog-manager.js';
import { DialogManager } from './protocol104/dialogs/dialog-manager.js';
export default class Communication104Plugin extends LitElement {
    doc: XMLDocument;
    editCount: number;
    byValuesRadio: RadioListItem;
    byNetworkRadio: RadioListItem;
    listDiv: Element;
    dialogManager: DialogManager;
    constructor();
    firstUpdated(): void;
    render(): TemplateResult;
    static styles: import("lit-element").CSSResult;
}
