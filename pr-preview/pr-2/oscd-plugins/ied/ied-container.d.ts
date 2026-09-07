import { TemplateResult } from 'lit-element';
import '@compas-oscd/open-scd/dist/action-pane.js';
import './access-point-container.js';
import './add-access-point-dialog.js';
import { Container } from './foundation.js';
import { AddAccessPointDialog } from './add-access-point-dialog.js';
/** [[`IED`]] plugin subeditor for editing `IED` element. */
export declare class IedContainer extends Container {
    selectedLNClasses: string[];
    addAccessPointDialog: AddAccessPointDialog;
    private openEditWizard;
    private createAccessPoint;
    private renderServicesIcon;
    private openSettingsWizard;
    private removeIED;
    private header;
    render(): TemplateResult;
    static styles: import("lit-element").CSSResult;
}
