import { LitElement, TemplateResult } from 'lit-element';
import { Dialog } from '@material/mwc-dialog';
import '@material/mwc-button';
import '@material/mwc-textfield';
/** A dialog component for creating virtual IEDs */
export declare class CreateIedDialog extends LitElement {
    doc: XMLDocument;
    onConfirm: (iedName: string) => void;
    dialog: Dialog;
    private newIedName;
    get open(): boolean;
    private isIedNameValid;
    private getIedNameError;
    private isIedNameUnique;
    show(): void;
    private close;
    private handleCreate;
    render(): TemplateResult;
    static styles: import("lit-element").CSSResult;
}
