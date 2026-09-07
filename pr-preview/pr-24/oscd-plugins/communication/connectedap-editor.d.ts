import { LitElement, TemplateResult } from 'lit-element';
import '@material/mwc-fab';
import '@compas-oscd/open-scd/dist/action-icon.js';
/** [[`Communication`]] subeditor for a `ConnectedAP` element. */
export declare class ConnectedAPEditor extends LitElement {
    /** SCL element ConnectedAP */
    element: Element;
    /** ConnectedAP attribute apName */
    get apName(): string;
    private openEditWizard;
    remove(): void;
    render(): TemplateResult;
}
