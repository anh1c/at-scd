import { LitElement, TemplateResult } from 'lit-element';
import '@material/mwc-fab';
import './substation/zeroline-pane.js';
/** An editor [[`plugin`]] for editing the `Substation` section. */
export default class SubstationPlugin extends LitElement {
    /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
    doc: XMLDocument;
    editCount: number;
    /** Opens a [[`WizardDialog`]] for creating a new `Substation` element. */
    openCreateSubstationWizard(): void;
    render(): TemplateResult;
    static styles: import("lit-element").CSSResult;
}
