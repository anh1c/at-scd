import { LitElement, TemplateResult } from 'lit-element';
import '@material/mwc-icon';
import '@material/mwc-list/mwc-list-item';
import '@compas-oscd/open-scd/dist/filtered-list.js';
export declare class IedList extends LitElement {
    doc: XMLDocument;
    editCount: number;
    serviceType?: 'goose' | 'smv';
    private onIedSelect;
    protected updated(): void;
    protected firstUpdated(): void;
    render(): TemplateResult;
    static styles: import("lit-element").CSSResult;
}
