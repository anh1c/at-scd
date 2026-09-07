import { LitElement, TemplateResult } from 'lit-element';
import '@material/mwc-fab';
import '@material/mwc-icon';
import { Fab } from '@material/mwc-fab';
import '@compas-oscd/open-scd/dist/action-icon.js';
/** [[`SubstationEditor`]] subeditor for a child-less `IED` element. */
export declare class IedEditor extends LitElement {
    /** The document being edited as provided to editor by [[`Zeroline`]]. */
    doc: XMLDocument;
    editCount: number;
    /** SCL element IED */
    element: Element;
    /** IED name attribute */
    get name(): string;
    connectReport: Fab;
    private openEditWizard;
    private openReportControlSelection;
    private openGseControlSelection;
    private openSmvControlSelection;
    private openCommunicationMapping;
    private removeIED;
    render(): TemplateResult;
}
