import { LitElement, TemplateResult } from 'lit-element';
import '@material/mwc-icon';
import '@material/mwc-list';
import '@material/mwc-list/mwc-list-item';
import '@compas-oscd/open-scd/dist/icons/icons.components.js';
/** An sub element for showing all Sampled Values per IED. */
export declare class SmvPublisherList extends LitElement {
    doc: XMLDocument;
    editCount: number;
    private onSelect;
    private openEditWizard;
    protected updated(): void;
    protected firstUpdated(): void;
    renderSmv(smvControl: Element): TemplateResult;
    render(): TemplateResult;
    static styles: import("lit-element").CSSResult;
}
