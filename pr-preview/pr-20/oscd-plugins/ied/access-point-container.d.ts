import { PropertyValues, TemplateResult } from 'lit-element';
import '@compas-oscd/open-scd/dist/action-pane.js';
import './server-container.js';
import { Container } from './foundation.js';
/** [[`IED`]] plugin subeditor for editing `AccessPoint` element. */
export declare class AccessPointContainer extends Container {
    selectedLNClasses: string[];
    private get lnElements();
    protected updated(_changedProperties: PropertyValues): void;
    private renderServicesIcon;
    private openEditWizard;
    private openSettingsWizard;
    private header;
    private removeAccessPoint;
    render(): TemplateResult;
    static styles: import("lit-element").CSSResult;
}
