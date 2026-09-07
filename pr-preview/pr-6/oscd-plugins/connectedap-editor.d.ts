import { TemplateResult } from 'lit-element';
import '@omicronenergy/oscd-ui/fab/oscd-fab.js';
import '@compas-oscd/open-scd/dist/action-icon.js';
import { Base104Container } from './base-container.js';
/** [[`104`]] subeditor for a `ConnectedAP` element. */
export declare class ConnectedAP104Editor extends Base104Container {
    /** SCL element ConnectedAP */
    element: Element;
    openEditWizard(): void;
    remove(): void;
    render(): TemplateResult;
}
