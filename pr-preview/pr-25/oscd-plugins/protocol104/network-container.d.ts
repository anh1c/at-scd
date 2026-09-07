import { TemplateResult } from 'lit-element';
import '@omicronenergy/oscd-ui/icon/oscd-icon.js';
import '@omicronenergy/oscd-ui/fab/oscd-fab.js';
import './subnetwork-container.js';
import { Base104Container } from './base-container.js';
export declare class Network104Container extends Base104Container {
    private getSubNetworkElements;
    /** Opens a [[`WizardDialog`]] for creating a new `SubNetwork` element. */
    private openCreateSubNetworkWizard;
    render(): TemplateResult;
    static styles: import("lit-element").CSSResult;
}
