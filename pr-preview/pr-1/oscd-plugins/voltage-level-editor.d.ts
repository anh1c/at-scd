import { LitElement, TemplateResult } from 'lit-element';
import '@material/mwc-icon-button';
import { Menu } from '@material/mwc-menu';
import { IconButton } from '@material/mwc-icon-button';
import '@compas-oscd/open-scd/dist/action-pane.js';
import './bay-editor.js';
import './general-equipment-editor.js';
import './ied-editor.js';
import './powertransformer-editor.js';
import '@compas-oscd/open-scd/dist/icons/icons.components.js';
import { Dialog } from '@material/mwc-dialog';
/** [[`Substation`]] subeditor for a `VoltageLevel` element. */
export declare class VoltageLevelEditor extends LitElement {
    /** The document being edited as provided to editor by [[`Zeroline`]]. */
    doc: XMLDocument;
    editCount: number;
    element: Element;
    readonly: boolean;
    /** Whether `Function` and `SubFunction` are rendered */
    showfunctions: boolean;
    get voltage(): string | null;
    get header(): string;
    getAttachedIeds?: (element: Element) => Element[];
    cloneUI: boolean;
    dialog: Dialog;
    addMenu: Menu;
    addButton: IconButton;
    openEditWizard(): void;
    /** Opens a [[`WizardDialog`]] for editing `LNode` connections. */
    openLNodeWizard(): void;
    remove(): void;
    private openCreateWizard;
    updated(): void;
    private renderRedirectUI;
    private renderLNodes;
    renderFunctions(): TemplateResult;
    renderIedContainer(): TemplateResult;
    renderPowerTransformerContainer(): TemplateResult;
    private renderAddButtons;
    render(): TemplateResult;
    static styles: import("lit-element").CSSResult;
}
