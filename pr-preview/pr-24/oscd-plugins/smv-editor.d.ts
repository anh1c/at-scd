import { LitElement, TemplateResult } from 'lit-element';
import '@material/mwc-icon';
import '@compas-oscd/open-scd/dist/action-icon.js';
export declare class SmvEditor extends LitElement {
    doc: XMLDocument;
    element: Element;
    get label(): string;
    private openEditWizard;
    private openSmvMoveDialog;
    remove(): void;
    render(): TemplateResult;
    static styles: import("lit-element").CSSResult;
}
