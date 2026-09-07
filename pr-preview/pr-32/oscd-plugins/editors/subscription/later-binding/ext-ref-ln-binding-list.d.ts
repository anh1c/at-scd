import { LitElement, TemplateResult } from 'lit-element';
import { Nsdoc } from '@compas-oscd/open-scd/dist/foundation/nsdoc.js';
/**
 * A sub element for showing all Ext Refs from a FCDA Element.
 * The List reacts on a custom event to know which FCDA Element was selected and updated the view.
 */
export declare class ExtRefLnBindingList extends LitElement {
    doc: XMLDocument;
    editCount: number;
    nsdoc: Nsdoc;
    controlTag: 'SampledValueControl' | 'GSEControl';
    currentSelectedControlElement: Element | undefined;
    currentSelectedFcdaElement: Element | undefined;
    currentIedElement: Element | undefined;
    constructor();
    private getLNElements;
    private getSubscribedLNElements;
    private getAvailableLNElements;
    private onFcdaSelectEvent;
    private subscribe;
    private unsubscribe;
    private bindingNotSupported;
    private buildLNTitle;
    private renderTitle;
    private renderSubscribedLN;
    private renderSubscribedLNs;
    private renderAvailableLNs;
    render(): TemplateResult;
    static styles: import("lit-element").CSSResult;
}
