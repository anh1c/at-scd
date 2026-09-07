import { LitElement, TemplateResult } from 'lit-element';
import '@compas-oscd/open-scd/dist/action-icon.js';
import '@compas-oscd/open-scd/dist/icons/icons.components.js';
export declare function getLNodeIcon(lNode: Element): TemplateResult;
/** Pane rendering `LNode` element with its children */
export declare class LNodeEditor extends LitElement {
    /** The document being edited as provided to editor by [[`Zeroline`]]. */
    doc: XMLDocument;
    /** The edited `LNode` element */
    element: Element;
    private get header();
    private get missingIedReference();
    private get isIEDReference();
    private cloneLNodeElement;
    private openEditWizard;
    remove(): void;
    render(): TemplateResult;
}
