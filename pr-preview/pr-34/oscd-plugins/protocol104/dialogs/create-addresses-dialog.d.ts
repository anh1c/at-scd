import { TemplateResult, nothing } from 'lit';
import '@omicronenergy/oscd-ui/button/oscd-text-button.js';
import '@omicronenergy/oscd-ui/icon/oscd-icon.js';
import '@compas-oscd/open-scd/dist/wizard-textfield.js';
import '@compas-oscd/open-scd/dist/WizardDivider.js';
import { BaseDialog } from '../../../components/base-dialog';
import { EditEventV2 } from '@compas-oscd/core';
export interface CreateAddressesDialogParams {
    doElement: Element;
    lnElement: Element;
}
export declare class CreateAddressesDialog extends BaseDialog<CreateAddressesDialogParams, EditEventV2> {
    private doElement;
    private lnElement;
    protected headline: string;
    show(params: CreateAddressesDialogParams): Promise<EditEventV2 | null>;
    private onConfirm;
    protected renderActions(): TemplateResult | typeof nothing;
    private setMonitorControlValue;
    private setMonitorInvertedSwitch;
    private getFormValue;
    private createAddressEdits;
    private renderMonitorTis;
    private renderControlTis;
    protected renderContent(): TemplateResult | typeof nothing;
}
