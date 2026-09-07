import { LitElement, TemplateResult } from 'lit-element';
import '@material/mwc-fab';
import '@material/mwc-icon';
import '@material/mwc-icon-button';
import '@material/mwc-menu';
import { IconButton } from '@material/mwc-icon-button';
import { Menu } from '@material/mwc-menu';
import '@compas-oscd/open-scd/dist/action-icon.js';
import '@compas-oscd/open-scd/dist/action-pane.js';
import './l-node-editor.js';
import './eq-function-editor.js';
/** [[`SubstationEditor`]] subeditor for a child-less `SubEquipment` element. */
export declare class SubEquipmentEditor extends LitElement {
    /** The document being edited as provided to editor by [[`Zeroline`]]. */
    doc: XMLDocument;
    editCount: number;
    /** SCL element SubEquipment */
    element: Element;
    /** SubEquipment name attribute */
    get label(): string;
    addMenu: Menu;
    addButton: IconButton;
    remove(): void;
    private openCreateWizard;
    updated(): void;
    private renderAddButtons;
    private renderLNodes;
    private renderEqFunctions;
    private openEditWizard;
    render(): TemplateResult;
    static styles: import("lit-element").CSSResult;
}
