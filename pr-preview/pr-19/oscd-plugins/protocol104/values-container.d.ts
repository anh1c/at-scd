import { TemplateResult } from 'lit-element';
import '@omicronenergy/oscd-ui/icon/oscd-icon.js';
import '@omicronenergy/oscd-ui/fab/oscd-fab.js';
import './ied-container.js';
import { Base104Container } from './base-container.js';
import { DialogManager } from './dialogs/dialog-manager.js';
/**
 * Container that will render an 'ied-104-container' for every IED which contains DAI Elements related to the
 * 104 Protocol.
 */
export declare class Values104Container extends Base104Container {
    get iedElements(): Element[];
    dialogManager: DialogManager;
    /** Opens a [[`WizardDialog`]] for creating a new `Substation` element. */
    private openCreateAddressWizard;
    private renderAddButton;
    render(): TemplateResult;
    static styles: import("lit-element").CSSResult;
}
