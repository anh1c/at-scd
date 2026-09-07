import { LitElement, TemplateResult } from 'lit-element';
import '@material/mwc-icon';
import '@material/mwc-icon-button';
import '@material/mwc-menu';
import { IconButton } from '@material/mwc-icon-button';
import { Menu } from '@material/mwc-menu';
import './conducting-equipment-editor.js';
import './function-editor.js';
import './general-equipment-editor.js';
import './l-node-editor.js';
import '@compas-oscd/open-scd/dist/icons/icons.components.js';
export declare class LineEditor extends LitElement {
    /** The document being edited as provided to editor by [[`Zeroline`]]. */
    doc: XMLDocument;
    editCount: number;
    /** SCL element Line */
    element: Element;
    /** Whether `Function` and `LNode` are rendered */
    showfunctions: boolean;
    get header(): string;
    addMenu: Menu;
    addButton: IconButton;
    private openEditWizard;
    private openCreateWizard;
    private renderConductingEquipments;
    private renderGeneralEquipments;
    private renderFunctions;
    updated(): void;
    remove(): void;
    private renderLNodes;
    private renderAddButtons;
    render(): TemplateResult;
    static styles: import("lit-element").CSSResult;
}
