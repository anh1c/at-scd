import { LitElement, TemplateResult } from 'lit-element';
import { Dialog } from '@material/mwc-dialog';
import '@material/mwc-dialog';
import '@material/mwc-button';
import '@material/mwc-textfield';
import '@material/mwc-switch';
import '@material/mwc-formfield';
import '@material/mwc-select';
import '@material/mwc-list/mwc-list-item';
import { TextField } from '@material/mwc-textfield';
export interface AccessPointCreationData {
    name: string;
    createServerAt: boolean;
    serverAtApName?: string;
    serverAtDesc?: string;
}
/** A dialog component for adding new AccessPoints */
export declare class AddAccessPointDialog extends LitElement {
    doc: XMLDocument;
    ied: Element;
    onConfirm: (data: AccessPointCreationData) => void;
    dialog: Dialog;
    apNameField: TextField;
    private apName;
    private createServerAt;
    private serverAtApName;
    private serverAtDesc;
    get open(): boolean;
    private isApNameUnique;
    private get accessPointsWithServer();
    show(): void;
    private reset;
    private close;
    private handleCreate;
    private getApNameError;
    private renderServerAtSection;
    render(): TemplateResult;
    static styles: import("lit-element").CSSResult;
}
