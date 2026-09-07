import { LitElement, TemplateResult } from 'lit-element';
import '@material/mwc-icon';
import '@compas-oscd/open-scd/dist/action-icon.js';
export declare class GseEditor extends LitElement {
    doc: XMLDocument;
    element: Element;
    get label(): string;
    private openEditWizard;
    private openGseMoveDialog;
    remove(): void;
    render(): TemplateResult;
    static styles: import("lit-element").CSSResult;
}
