import { LitElement, TemplateResult } from 'lit-element';
import '@material/mwc-list/mwc-check-list-item';
import '@compas-oscd/open-scd/dist/filtered-list.js';
/**
 * Plug-in that enriches the desc attribute in SEL type IED elements based on a signal list
 * The signal list must be a  ; or , separated CSV file with 3 columns.
 * 1st column: signal name
 * 2nd column: IED name
 * 3rd column: identifier from the SEL namespace excluding the prefix of "db:",
 *             similar to relay word bit name (RWB), e.g. SV24T, 51P1T, IN203
 */
export default class UpdateDescriptionSel extends LitElement {
    /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
    doc: XMLDocument;
    pluginFileUI: HTMLInputElement;
    processSignalList(csvString: string): void;
    private onFileInput;
    /** Entry point for this plug-in */
    run(): Promise<void>;
    render(): TemplateResult;
    static styles: import("lit-element").CSSResult;
}
