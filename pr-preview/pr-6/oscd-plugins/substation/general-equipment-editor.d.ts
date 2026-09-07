import { LitElement, TemplateResult } from 'lit-element';
import '@material/mwc-icon-button';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-menu';
import '@material/mwc-fab';
import { IconButton } from '@material/mwc-icon-button';
import { Menu } from '@material/mwc-menu';
import '@compas-oscd/open-scd/dist/action-pane.js';
import '../../editors/substation/eq-function-editor.js';
import '../../editors/substation/l-node-editor.js';
export declare class GeneralEquipmentEditor extends LitElement {
    doc: XMLDocument;
    editCount: number;
    element: Element;
    /** Whether `Function` and `SubFunction` are rendered */
    showfunctions: boolean;
    get header(): string;
    addMenu: Menu;
    addButton: IconButton;
    openEditWizard(): void;
    private openCreateWizard;
    updated(): void;
    remove(): void;
    private renderLNodes;
    private renderEqFunctions;
    private renderAddButtons;
    render(): TemplateResult;
    static styles: import("lit-element").CSSResult;
}
