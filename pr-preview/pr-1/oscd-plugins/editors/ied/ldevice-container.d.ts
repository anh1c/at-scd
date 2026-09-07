import { PropertyValues, TemplateResult } from 'lit-element';
import { IconButtonToggle } from '@material/mwc-icon-button-toggle';
import { Container } from './foundation.js';
import { AddLnDialog } from './add-ln-dialog.js';
import '@compas-oscd/open-scd/dist/action-pane.js';
import './ln-container.js';
import './add-ln-dialog.js';
/** [[`IED`]] plugin subeditor for editing `LDevice` element. */
export declare class LDeviceContainer extends Container {
    selectedLNClasses: string[];
    toggleButton: IconButtonToggle | undefined;
    addLnDialog: AddLnDialog;
    private openEditWizard;
    private header;
    protected firstUpdated(): void;
    protected updated(_changedProperties: PropertyValues): void;
    private get lnElements();
    private handleAddLN;
    private removeLDevice;
    render(): TemplateResult;
    static styles: import("lit-element").CSSResult;
}
