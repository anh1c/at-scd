import { LitElement, TemplateResult } from 'lit-element';
import '@material/mwc-icon';
import '@material/mwc-list/mwc-list-item';
import '@compas-oscd/open-scd/dist/filtered-list.js';
import '@compas-oscd/open-scd/dist/icons/icons.components.js';
/** An sub element for showing all published GOOSE messages per IED. */
export declare class GooseList extends LitElement {
    doc: XMLDocument;
    editCount: number;
    private onSelect;
    renderGoose(gseControl: Element): TemplateResult;
    private openEditWizard;
    protected updated(): void;
    protected firstUpdated(): void;
    render(): TemplateResult;
    static styles: import("lit-element").CSSResult;
}
