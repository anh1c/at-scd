import { LitElement, TemplateResult } from 'lit-element';
import '@material/mwc-fab';
import '@material/mwc-icon';
import '@material/mwc-icon-button';
import '@material/mwc-menu';
import { IconButton } from '@material/mwc-icon-button';
import { Menu } from '@material/mwc-menu';
import '@compas-oscd/open-scd/dist/action-icon.js';
import '@compas-oscd/open-scd/dist/action-pane.js';
import './eq-function-editor.js';
import './l-node-editor.js';
import './tapchanger-editor.js';
export declare class TransformerWindingEditor extends LitElement {
    /** The document being edited as provided to editor by [[`Zeroline`]]. */
    doc: XMLDocument;
    editCount: number;
    /** SCL element TransformerWinding */
    element: Element;
    /** Whether `EqFunction` elements are rendered */
    showfunctions: boolean;
    /** TransformerWinding name attribute */
    get label(): string;
    addMenu: Menu;
    addButton: IconButton;
    openEditWizard(): void;
    remove(): void;
    private openCreateWizard;
    updated(): void;
    private renderLNodes;
    private renderEqFunctions;
    private renderTapChanger;
    private renderAddButtons;
    render(): TemplateResult;
    static styles: import("lit-element").CSSResult;
}
