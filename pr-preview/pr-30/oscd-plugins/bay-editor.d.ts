import { LitElement, TemplateResult } from 'lit-element';
import '@material/mwc-icon-button';
import '@material/mwc-textfield';
import { Dialog } from '@material/mwc-dialog';
import { Menu } from '@material/mwc-menu';
import { IconButton } from '@material/mwc-icon-button';
import '@compas-oscd/open-scd/dist/action-pane.js';
import './ied-editor.js';
import './conducting-equipment-editor.js';
import './general-equipment-editor.js';
import './powertransformer-editor.js';
import '@compas-oscd/open-scd/dist/icons/icons.components.js';
/** [[`SubstationEditor`]] subeditor for a `Bay` element. */
export declare class BayEditor extends LitElement {
    /** The document being edited as provided to editor by [[`Zeroline`]]. */
    doc: XMLDocument;
    editCount: number;
    element: Element;
    readonly: boolean;
    /** Whether `Function` and `SubFunction` are rendered */
    showfunctions: boolean;
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
    private renderAddButtons;
    render(): TemplateResult;
    static styles: import("lit-element").CSSResult;
}
