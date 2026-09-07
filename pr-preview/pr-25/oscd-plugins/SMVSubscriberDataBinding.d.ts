import { LitElement, TemplateResult } from 'lit-element';
import { Nsdoc } from '@compas-oscd/open-scd/dist/foundation/nsdoc.js';
import './subscription/fcda-binding-list.js';
import './subscription/later-binding/ext-ref-ln-binding-list.js';
/** An editor [[`plugin`]] for Subscribe Data Binding (SMV). */
export default class SMVSubscribeDataBindingPlugin extends LitElement {
    doc: XMLDocument;
    editCount: number;
    nsdoc: Nsdoc;
    render(): TemplateResult;
    static styles: import("lit-element").CSSResult;
}
