import { LitElement, TemplateResult } from 'lit-element';
/**
 * A sub element for showing all Ext Refs from a FCDA Element.
 * The List reacts on a custom event to know which FCDA Element was selected and updated the view.
 */
export declare class ExtRefLaterBindingList extends LitElement {
    doc: XMLDocument;
    editCount: number;
    controlTag: 'SampledValueControl' | 'GSEControl';
    currentSelectedControlElement: Element | undefined;
    currentSelectedFcdaElement: Element | undefined;
    currentIedElement: Element | undefined;
    serviceTypeLookup: {
        GSEControl: string;
        SampledValueControl: string;
    };
    constructor();
    private onFcdaSelectEvent;
    /**
     * Check data consistency of source `FCDA` and sink `ExtRef` based on
     * `ExtRef`'s `pLN`, `pDO`, `pDA` and `pServT` attributes.
     * Consistent means `CDC` and `bType` of both ExtRef and FCDA is equal.
     * In case
     *  - `pLN`, `pDO`, `pDA` or `pServT` attributes are not present, allow subscribing
     *  - no CDC or bType can be extracted, do not allow subscribing
     *
     * @param extRef - The `ExtRef` Element to check against
     */
    private unsupportedExtRefElement;
    /**
     * Unsubscribing means removing a list of attributes from the ExtRef Element.
     *
     * @param extRefElement - The Ext Ref Element to clean from attributes.
     */
    private unsubscribe;
    /**
     * Subscribing means copying a list of attributes from the FCDA Element (and others) to the ExtRef Element.
     *
     * @param extRefElement - The Ext Ref Element to add the attributes to.
     */
    private subscribe;
    private getSubscribedExtRefElements;
    private getAvailableExtRefElements;
    private renderTitle;
    private renderExtRefElement;
    private renderSubscribedExtRefs;
    private renderAvailableExtRefs;
    render(): TemplateResult;
    static styles: import("lit-element").CSSResult;
}
