import { TemplateResult, nothing } from 'lit';
import '@omicronenergy/oscd-ui/button/oscd-text-button.js';
import '@compas-oscd/open-scd/dist/finder-list.js';
import { Path } from '@compas-oscd/open-scd/dist/finder-list.js';
import { BaseDialog } from '../../../components/base-dialog.js';
export interface SelectDODialogParams {
    doc: XMLDocument | null;
}
export declare class SelectDODialog extends BaseDialog<SelectDODialogParams, Path> {
    private doc;
    protected headline: string;
    show(params: SelectDODialogParams): Promise<Path | null>;
    onConfirm(): void;
    protected onClose(): void;
    protected renderContent(): TemplateResult | typeof nothing;
    protected renderActions(): TemplateResult | typeof nothing;
}
