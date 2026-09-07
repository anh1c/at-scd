import { LitElement, TemplateResult } from 'lit-element';
import { EditEventV2 } from '@compas-oscd/core';
import './select-do-dialog.js';
import { SelectDODialog, SelectDODialogParams } from './select-do-dialog.js';
import './create-addresses-dialog.js';
import { CreateAddressesDialog, CreateAddressesDialogParams } from './create-addresses-dialog.js';
import { Path } from '@compas-oscd/open-scd/dist/finder-list.js';
export declare class DialogManager extends LitElement {
    selectDODialog: SelectDODialog;
    createAddressesDialog: CreateAddressesDialog;
    showSelectDODialog(params: SelectDODialogParams): Promise<Path | null>;
    showCreateAddressesDialog(params: CreateAddressesDialogParams): Promise<EditEventV2 | null>;
    protected render(): TemplateResult;
}
