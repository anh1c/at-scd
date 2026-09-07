import { LitElement, TemplateResult } from 'lit-element';
import '@material/mwc-fab';
import '@material/mwc-icon-button';
import '@material/mwc-list';
import '@material/mwc-list/mwc-list-item';
import '@compas-oscd/open-scd/dist/filtered-list.js';
/** An editor [[`plugin`]] for editing the `DataTypeTemplates` section. */
export default class TemplatesPlugin extends LitElement {
    /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
    doc: XMLDocument;
    editCount: number;
    openCreateLNodeTypeWizard(): Promise<void>;
    openLNodeTypeWizard(identity: string): void;
    openCreateDOTypeWizard(): Promise<void>;
    openDOTypeWizard(identity: string): void;
    openDATypeWizard(identity: string): void;
    openCreateDATypeWizard(): Promise<void>;
    openEnumTypeWizard(identity: string): void;
    openCreateEnumWizard(): Promise<void>;
    createDataTypeTemplates(): void;
    render(): TemplateResult;
    static styles: import("lit-element").CSSResult;
}
