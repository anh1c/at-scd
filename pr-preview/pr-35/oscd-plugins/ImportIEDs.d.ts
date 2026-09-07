import { LitElement, TemplateResult } from 'lit-element';
import '@material/mwc-list/mwc-check-list-item';
import '@material/dialog';
import '@material/mwc-button';
import { Dialog } from '@material/mwc-dialog';
import '@compas-oscd/open-scd/dist/filtered-list.js';
export default class ImportingIedPlugin extends LitElement {
    doc: XMLDocument;
    editCount: number;
    iedSelection: TemplateResult[];
    pluginFileUI: HTMLInputElement;
    dialog: Dialog;
    run(): Promise<void>;
    docUpdate(): Promise<void>;
    protected componentHtml(strings: TemplateStringsArray, ...values: unknown[]): TemplateResult;
    private importIED;
    private importIEDs;
    prepareImport(importDoc: XMLDocument, fileName: string): Promise<void>;
    /** Loads the file `event.target.files[0]` into [[`src`]] as a `blob:...`. */
    protected onLoadFiles(event: Event): Promise<void>;
    protected renderInput(): TemplateResult;
    protected buildIedSelection(importDoc: XMLDocument, fileName: string): void;
    render(): TemplateResult;
    static styles: import("lit-element").CSSResult;
}
