import { LitElement, TemplateResult } from 'lit-element';
import { Dialog } from '@material/mwc-dialog';
import '@material/mwc-dialog';
import '@material/mwc-textfield';
import '@material/mwc-button';
export interface LDeviceData {
    inst: string;
}
/** Dialog for adding a new LDevice to a Server. */
export declare class AddLDeviceDialog extends LitElement {
    server: Element;
    onConfirm: (data: LDeviceData) => void;
    dialog: Dialog;
    private inst;
    connectedCallback(): void;
    show(): void;
    private close;
    private handleCreate;
    private get lDeviceInst();
    private getInstError;
    render(): TemplateResult;
    static styles: import("lit-element").CSSResult;
}
