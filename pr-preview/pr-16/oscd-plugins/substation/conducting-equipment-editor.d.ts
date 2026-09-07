import { LitElement, TemplateResult } from 'lit-element';
import '@material/mwc-fab';
import '@material/mwc-icon';
import '@material/mwc-icon-button';
import '@material/mwc-menu';
import { Menu } from '@material/mwc-menu';
import { IconButton } from '@material/mwc-icon-button';
import '@compas-oscd/open-scd/dist/action-icon.js';
import '@compas-oscd/open-scd/dist/action-pane.js';
import './eq-function-editor.js';
import './l-node-editor.js';
import './sub-equipment-editor.js';
/** [[`SubstationEditor`]] subeditor for a `ConductingEquipment` element. */
export declare class ConductingEquipmentEditor extends LitElement {
    /** The document being edited as provided to editor by [[`Zeroline`]]. */
    doc: XMLDocument;
    editCount: number;
    /** SCL element ConductingEquipment */
    element: Element;
    /** ConductingEquipment name attribute */
    get name(): string;
    /** Whether `EqFunction`, `SubEqFunction` and `SubEquipment` are rendered */
    showfunctions: boolean;
    addMenu: Menu;
    addButton: IconButton;
    private openEditWizard;
    private openLNodeWizard;
    private openCreateWizard;
    remove(): void;
    updated(): void;
    private renderLNodes;
    renderEqFunctions(): TemplateResult;
    private renderSubEquipments;
    private renderAddButtons;
    renderContentPane(): TemplateResult;
    renderContentIcon(): TemplateResult;
    render(): TemplateResult;
    static styles: import("lit-element").CSSResult;
}
