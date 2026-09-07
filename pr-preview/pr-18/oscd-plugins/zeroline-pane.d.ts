import { LitElement, TemplateResult } from 'lit-element';
import '@material/mwc-icon-button';
import '@material/mwc-icon-button-toggle';
import { IconButton } from '@material/mwc-icon-button';
import { IconButtonToggle } from '@material/mwc-icon-button-toggle';
import { Menu } from '@material/mwc-menu';
import './line-editor.js';
import './process-editor.js';
import './substation-editor.js';
import './ied-editor.js';
/** [[`Zeroline`]] pane for displaying `Substation` and/or `IED` sections. */
export declare class ZerolinePane extends LitElement {
    /** The document being edited as provided to editor by [[`Zeroline`]]. */
    doc: XMLDocument;
    editCount: number;
    readonly: boolean;
    getAttachedIeds?: (element: Element) => Element[];
    commmap: IconButton;
    showieds: IconButtonToggle;
    showfunctions: IconButtonToggle;
    gsecontrol: IconButton;
    smvcontrol: IconButton;
    reportcontrol: IconButton;
    createsubstation: IconButton;
    addMenu: Menu;
    addButton: IconButton;
    toggleShowIEDs(): void;
    toggleShowFunctions(): void;
    renderIedContainer(): TemplateResult;
    renderSubstation(): TemplateResult;
    renderLines(): TemplateResult;
    renderProcesses(): TemplateResult;
    private openCreateWizard;
    private renderAddButtons;
    updated(): void;
    render(): TemplateResult;
    static styles: import("lit-element").CSSResult;
}
