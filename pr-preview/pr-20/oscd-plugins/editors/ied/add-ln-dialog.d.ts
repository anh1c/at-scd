import { LitElement, TemplateResult } from 'lit-element';
import { Dialog } from '@material/mwc-dialog';
import '@material/mwc-dialog';
import '@material/mwc-textfield';
import '@material/mwc-button';
import '@material/mwc-select';
import '@material/mwc-list/mwc-list-item';
import '../../components/tooltip';
import { OscdTooltip } from '../../components/tooltip';
export interface LNData {
    lnType: string;
    lnClass: string;
    amount: number;
    prefix?: string;
}
/** Dialog for adding a new LN to a LDevice. */
export declare class AddLnDialog extends LitElement {
    doc: XMLDocument;
    onConfirm: (data: LNData) => void;
    dialog: Dialog;
    tooltip: OscdTooltip;
    lnType: string;
    amount: number;
    filterText: string;
    prefix: string;
    private get lNodeTypes();
    private get filteredLNodeTypes();
    show(): void;
    private close;
    private isPrefixValid;
    private handleCreate;
    private onListItemEnter;
    private onListItemMove;
    private onListItemLeave;
    render(): TemplateResult;
    static styles: import("lit-element").CSSResult;
}
