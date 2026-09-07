import { LitElement, TemplateResult } from 'lit-element';
import '@material/mwc-dialog';
import '@material/mwc-list';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-list/mwc-check-list-item';
import '@material/mwc-list/mwc-radio-list-item';
import { Dialog } from '@material/mwc-dialog';
import { CheckListItem } from '@material/mwc-list/mwc-check-list-item';
import '@compas-oscd/open-scd/dist/filtered-list.js';
export type FunctionElementDescription = {
    uniqueName: string;
    lNodes: Element[];
    lln0?: Element;
};
export default class VirtualTemplateIED extends LitElement {
    doc: XMLDocument;
    editCount: number;
    get isValidManufacturer(): boolean;
    get isValidApName(): boolean;
    get someItemsSelected(): boolean;
    get validPriparyAction(): boolean;
    get unreferencedLNodes(): Element[];
    get lLN0s(): Element[];
    dialog: Dialog;
    selectedLNodeItems?: CheckListItem[];
    run(): Promise<void>;
    private onPrimaryAction;
    private onClosed;
    private renderLLN0s;
    private renderLNodes;
    render(): TemplateResult;
    static styles: import("lit-element").CSSResult;
}
