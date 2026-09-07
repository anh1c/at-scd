import { LitElement, TemplateResult } from 'lit-element';
import '@material/mwc-icon';
import '@material/mwc-icon-button';
import '@material/mwc-menu';
import { IconButton } from '@material/mwc-icon-button';
import { Menu } from '@material/mwc-menu';
import '@compas-oscd/open-scd/dist/action-pane.js';
import './eq-function-editor.js';
import './l-node-editor.js';
import './sub-equipment-editor.js';
export declare class TapChangerEditor extends LitElement {
    /** The document being edited as provided to editor by [[`Zeroline`]]. */
    doc: XMLDocument;
    editCount: number;
    /** SCL element TransformerWinding */
    element: Element;
    /** Whether `EqFunction` and `SubEquipment` are rendered */
    showfunctions: boolean;
    get header(): string;
    addMenu: Menu;
    addButton: IconButton;
    private openEditWizard;
    private openCreateWizard;
    updated(): void;
    remove(): void;
    private renderLNodes;
    private renderEqFunctions;
    private renderSubEquipments;
    private renderAddButtons;
    render(): TemplateResult;
    static styles: import("lit-element").CSSResult;
}
