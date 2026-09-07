import { LitElement, TemplateResult } from 'lit-element';
import '@compas-oscd/open-scd/dist/action-pane.js';
import './sub-function-editor.js';
import './general-equipment-editor.js';
import { Menu } from '@material/mwc-menu';
import { IconButton } from '@material/mwc-icon-button';
/** Pane rendering `Function` element with its children */
export declare class FunctionEditor extends LitElement {
    /** The document being edited as provided to editor by [[`Zeroline`]]. */
    doc: XMLDocument;
    editCount: number;
    /** The edited `Function` element */
    element: Element;
    showfunctions: boolean;
    private get header();
    addMenu: Menu;
    addButton: IconButton;
    private openEditWizard;
    remove(): void;
    private openCreateWizard;
    updated(): void;
    private renderLNodes;
    private renderSubFunctions;
    private renderAddButtons;
    render(): TemplateResult;
    static styles: import("lit-element").CSSResult;
}
