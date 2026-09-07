import { TemplateResult, LitElement } from 'lit-element';
import '@material/mwc-button';
import '@material/mwc-dialog';
import '@material/mwc-list';
import '@material/mwc-list/mwc-list-item';
import { Dialog } from '@material/mwc-dialog';
export default class SclHistoryPlugin extends LitElement {
    doc: XMLDocument;
    editCount: number;
    historyLog: Dialog;
    private createMessage;
    get sclHistory(): Element[];
    run(): Promise<void>;
    renderSclHistoryEntry(element: Element): TemplateResult;
    private renderSclHistory;
    render(): TemplateResult;
    static styles: import("lit-element").CSSResult;
}
