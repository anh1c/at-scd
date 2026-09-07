import { LitElement, TemplateResult } from 'lit-element';
import '@material/mwc-radio';
import '@material/mwc-formfield';
import { RadioListItem } from '@material/mwc-list/mwc-radio-list-item';
import './subscription/goose/subscriber-list.js';
import './subscription/goose/goose-list.js';
import './subscription/ied-list.js';
/** An editor [[`plugin`]] for subscribing IEDs to GOOSE messages. */
export default class GooseSubscriberMessageBindingPlugin extends LitElement {
    /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
    doc: XMLDocument;
    editCount: number;
    goosePublisherView: RadioListItem;
    gooseSubscriberView: RadioListItem;
    listDiv: Element;
    constructor();
    firstUpdated(): void;
    render(): TemplateResult;
    static styles: import("lit-element").CSSResult;
}
