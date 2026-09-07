import { LitElement, TemplateResult } from 'lit-element';
import '@material/mwc-icon-button';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-menu';
import { IconButton } from '@material/mwc-icon-button';
import { Menu } from '@material/mwc-menu';
import '@compas-oscd/open-scd/dist/action-pane.js';
import './eq-sub-function-editor.js';
import './general-equipment-editor.js';
/** Pane rendering `EqFunction` element with its children */
export declare class EqFunctionEditor extends LitElement {
    /** The document being edited as provided to editor by [[`Zeroline`]]. */
    doc: XMLDocument;
    editCount: number;
    /** The edited `EqFunction` element */
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
    private renderEqSubFunctions;
    private renderAddButtons;
    render(): TemplateResult;
    static styles: import("lit-element").CSSResult;
}
