import { TemplateResult, nothing, LitElement } from 'lit';
import { OscdDialog } from '@omicronenergy/oscd-ui/dialog/OscdDialog.js';
import '@omicronenergy/oscd-ui/dialog/oscd-dialog.js';
import '@omicronenergy/oscd-ui/button/oscd-text-button.js';
export interface DialogPromise<TResult> {
    resolve: (value: TResult | null) => void;
    reject: () => unknown;
}
export declare class BaseDialog<TParams, TResult> extends LitElement {
    dialog: OscdDialog;
    protected showCancel: boolean;
    protected headline: string;
    protected dialogPromise: DialogPromise<TResult> | null;
    protected show(params: TParams): Promise<TResult | null>;
    protected confirm(value: TResult): void;
    protected close(): void;
    protected onClose(): void;
    protected renderActions(): TemplateResult | typeof nothing;
    protected renderContent(): TemplateResult | typeof nothing;
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
