import { LitElement, TemplateResult } from 'lit-element';
import '@material/mwc-dialog';
import '@material/mwc-icon-button';
import './connectedap-editor.js';
import './gse-editor.js';
import './smv-editor.js';
/** [[`Communication`]] subeditor for a `SubNetwork` element. */
export declare class SubNetworkEditor extends LitElement {
    doc: XMLDocument;
    editCount: number;
    /** SCL element SubNetwork */
    element: Element;
    /** SubNetwork attribute name */
    get name(): string;
    /** SubNetwork attribute desc */
    get desc(): string | null;
    /** SubNetwork attribute type */
    get type(): string | null;
    /** SubNetwork child elements BitRate label */
    get bitrate(): string | null;
    private moveTargetElement;
    newlySelectedAP: Element | null;
    private moveDialog;
    private openConnectedAPwizard;
    private openEditWizard;
    remove(): void;
    private openMoveDialog;
    private confirmMove;
    private renderSmvEditors;
    private renderGseEditors;
    private renderConnectedApEditors;
    private renderIEDs;
    private renderSmvGseMoveDialog;
    private subNetworkSpecs;
    private header;
    render(): TemplateResult;
    static styles: import("lit-element").CSSResult;
}
