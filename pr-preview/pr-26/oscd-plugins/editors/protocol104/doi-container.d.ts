import { TemplateResult } from 'lit-element';
import '@omicronenergy/oscd-ui/icon/oscd-icon.js';
import '@omicronenergy/oscd-ui/iconbutton/oscd-icon-button.js';
import '@omicronenergy/oscd-ui/list/oscd-list-item.js';
import '@omicronenergy/oscd-ui/list/oscd-list.js';
import '@omicronenergy/oscd-ui/action-pane/oscd-action-pane.js';
import { Base104Container } from './base-container.js';
/**
 * Container showing all the DAI Elements, related to the 104 Protocol, of the passed DOI Element in a list.
 * The DAI Element can be edited by pressing the Edit button at the end of the line.
 */
export declare class Doi104Container extends Base104Container {
    element: Element;
    isExpanded: boolean;
    get daiElements(): Element[];
    private getAddressElements;
    protected firstUpdated(): void;
    private openEditAddressWizard;
    private openEditTiWizard;
    get header(): string;
    private renderAddressList;
    private renderDaiList;
    render(): TemplateResult;
    static styles: import("lit-element").CSSResult;
}
