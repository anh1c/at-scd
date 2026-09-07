import { LitElement, TemplateResult } from 'lit-element';
import '@material/mwc-fab';
import '@material/mwc-icon';
import '@material/mwc-icon-button';
import '@material/mwc-menu';
import { IconButton } from '@material/mwc-icon-button';
import { Menu } from '@material/mwc-menu';
import '@compas-oscd/open-scd/dist/action-icon.js';
import '@compas-oscd/open-scd/dist/action-pane.js';
import './sub-equipment-editor.js';
import './eq-function-editor.js';
import './transformer-winding-editor.js';
/** [[`SubstationEditor`]] subeditor for a child-less `PowerTransformer` element. */
export declare class PowerTransformerEditor extends LitElement {
    /** The document being edited as provided to editor by [[`Zeroline`]]. */
    doc: XMLDocument;
    editCount: number;
    /** SCL element PowerTransformer */
    element: Element;
    /** PowerTransformer name attribute */
    get name(): string;
    /** Whether `EqFunction`, `SubEqFunction` and `SubEquipment` are rendered */
    showfunctions: boolean;
    addMenu: Menu;
    addButton: IconButton;
    private openEditWizard;
    private openLNodeWizard;
    private removeElement;
    private openCreateWizard;
    updated(): void;
    private renderLNodes;
    renderEqFunctions(): TemplateResult;
    private renderSubEquipments;
    private renderAddButtons;
    renderContentPane(): TemplateResult;
    private renderTransformerWinding;
    renderContentIcon(): TemplateResult;
    render(): TemplateResult;
    static styles: import("lit-element").CSSResult;
}
