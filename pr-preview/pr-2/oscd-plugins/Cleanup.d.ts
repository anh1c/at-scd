import { LitElement, TemplateResult } from 'lit-element';
import './cleanup/datasets-container.js';
import './cleanup/control-blocks-container.js';
import './cleanup/datatypes-container.js';
/** An editor [[`plugin`]] for cleaning SCL references and definitions. */
export default class Cleanup extends LitElement {
    /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
    doc: XMLDocument;
    editCount: number;
    render(): TemplateResult;
    static styles: import("lit-element").CSSResult;
}
