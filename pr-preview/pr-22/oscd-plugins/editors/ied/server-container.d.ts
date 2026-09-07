import { PropertyValues, TemplateResult } from 'lit-element';
import { Container } from './foundation.js';
import { AddLDeviceDialog } from './add-ldevice-dialog.js';
import '@compas-oscd/open-scd/dist/action-pane.js';
import './ldevice-container.js';
import './add-ldevice-dialog.js';
/** [[`IED`]] plugin subeditor for editing `Server` element. */
export declare class ServerContainer extends Container {
    selectedLNClasses: string[];
    addAccessPointDialog: AddLDeviceDialog;
    private header;
    protected updated(_changedProperties: PropertyValues): void;
    private get lDeviceElements();
    private handleAddLDevice;
    render(): TemplateResult;
}
