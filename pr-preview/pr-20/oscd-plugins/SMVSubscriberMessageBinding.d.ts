import { LitElement, TemplateResult } from 'lit-element';
import { RadioListItem } from '@material/mwc-list/mwc-radio-list-item.js';
import './subscription/sampledvalues/subscriber-list.js';
import './subscription/sampledvalues/smv-list.js';
import './subscription/ied-list.js';
/** An editor [[`plugin`]] for subscribing IEDs to Sampled Values. */
export default class SMVSubscriberMessageBindingPlugin extends LitElement {
    /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
    doc: XMLDocument;
    editCount: number;
    smvPublisherView: RadioListItem;
    smvSubscriberView: RadioListItem;
    listDiv: Element;
    constructor();
    firstUpdated(): void;
    render(): TemplateResult;
    static styles: import("lit-element").CSSResult;
}
