import { LitElement } from 'lit-element';
import { Create, Delete } from '@compas-oscd/core';
export declare enum View {
    PUBLISHER = 0,
    SUBSCRIBER = 1
}
/**
 * Enumeration stating the Subscribe status of a IED to a GOOSE or Sampled Value.
 */
export declare enum SubscribeStatus {
    Full = 0,
    Partial = 1,
    None = 2
}
export interface ViewDetail {
    view: View;
}
export type ViewEvent = CustomEvent<ViewDetail>;
export declare function newViewEvent(view: View, eventInitDict?: CustomEventInit<ViewDetail>): ViewEvent;
export interface IEDSelectDetail {
    ied: Element | undefined;
}
export type IEDSelectEvent = CustomEvent<IEDSelectDetail>;
export declare function newIEDSelectEvent(ied: Element | undefined, eventInitDict?: CustomEventInit<IEDSelectDetail>): IEDSelectEvent;
export interface FcdaSelectDetail {
    control: Element | undefined;
    fcda: Element | undefined;
}
export type FcdaSelectEvent = CustomEvent<FcdaSelectDetail>;
export declare function newFcdaSelectEvent(control: Element | undefined, fcda: Element | undefined, eventInitDict?: CustomEventInit<FcdaSelectDetail>): FcdaSelectEvent;
export interface SubscriptionChangedDetail {
    control: Element | undefined;
    fcda: Element | undefined;
}
export type SubscriptionChangedEvent = CustomEvent<SubscriptionChangedDetail>;
export declare function newSubscriptionChangedEvent(control: Element | undefined, fcda: Element | undefined, eventInitDict?: CustomEventInit<SubscriptionChangedDetail>): SubscriptionChangedEvent;
export declare function getFcdaTitleValue(fcdaElement: Element): string;
export declare function getFcdaSubtitleValue(fcdaElement: Element): string;
export declare function existExtRef(parentInputs: Element, fcda: Element, control: Element | undefined): boolean;
export declare function getExtRef(parentInputs: Element, fcda: Element, control: Element | undefined): Element | undefined;
export declare function canRemoveSubscriptionSupervision(subscribedExtRef: Element): boolean;
/**
 * Returns an array with a single Create action to create a new
 * supervision element for the given GOOSE/SMV message and subscriber IED.
 *
 * @param controlBlock The GOOSE or SMV message element
 * @param subscriberIED The subscriber IED
 * @returns an empty array if instantiation is not possible or an array with a single Create action
 */
export declare function instantiateSubscriptionSupervision(controlBlock: Element | undefined, subscriberIED: Element | undefined): Create[];
/**
 * Return Val elements within an LGOS/LSVS instance for a particular IED and control block type.
 * @param ied - IED SCL element.
 * @param cbTagName - Either GSEControl or (defaults to) SampledValueControl.
 * @param firstOnly - If true, return the first element found
 * @returns an Element array of Val SCL elements within an LGOS/LSVS node.
 */
export declare function getSupervisionCbRefs(ied: Element, cbTagName: string): Element[];
export declare function getSupervisionCbRefs(ied: Element, cbTagName: string, firstOnly: boolean): Element | null;
/**
 * Return an array with a single Delete action to delete the supervision element
 * for the given GOOSE/SMV message and subscriber IED.
 *
 * @param controlBlock The GOOSE or SMV message element
 * @param subscriberIED The subscriber IED
 * @returns an empty array if removing the supervision is not possible or an array
 * with a single Delete action that removes the LN if it was created in OpenSCD
 * or only the supervision structure DOI/DAI/Val if it was created by the user.
 */
export declare function removeSubscriptionSupervision(controlBlock: Element | undefined, subscriberIED: Element | undefined): Delete[];
/** Returns an new or existing LN instance available for supervision instantiation
 *
 * @param controlBlock The GOOSE or SMV message element
 * @param subscriberIED The subscriber IED
 * @returns The LN instance or null if no LN instance could be found or created
 */
export declare function findOrCreateAvailableLNInst(controlBlock: Element, subscriberIED: Element, supervisionType: string): Element | null;
/**
 * Find the first ExtRef SCL element given a control and a subscribing IED
 *
 * @param publishedControlBlock - the control block SCL element in the publishing IED.
 * @param subscribingIed - the subscribing IED SCL element.
 * @returns The first ExtRef element associated with the subscribing IED and published control block.
 */
export declare function getFirstSubscribedExtRef(publishedControlBlock: Element, subscribingIed: Element): Element | null;
/** Returns the subscriber's supervision LN for a given control block and extRef element
 *
 * @param extRef - The extRef SCL element in the subscribing IED.
 * @returns The supervision LN instance or null if not found
 */
export declare function getExistingSupervision(extRef: Element | null): Element | null;
/**
 * Counts the number of LN instances with proper supervision for the given control block set up.
 *
 * @param subscriberIED The subscriber IED
 * @param controlBlock The GOOSE or SMV message element
 * @returns The number of LN instances with a supervision set up
 */
export declare function instantiatedSupervisionsCount(subscriberIED: Element, controlBlock: Element): number;
/**
 * Counts the max number of LN instances with supervision allowed for
 * the given control block's type of message.
 *
 * @param subscriberIED The subscriber IED
 * @param controlBlock The GOOSE or SMV message element
 * @returns The max number of LN instances with supervision allowed
 */
export declare function maxSupervisions(subscriberIED: Element, controlBlock: Element): number;
/**
 * Creates a string pointer to the control block element.
 *
 * @param controlBlock The GOOSE or SMV message element
 * @returns null if the control block is undefined or a string pointer to the control block element
 */
export declare function controlBlockReference(controlBlock: Element | undefined): string | null;
export declare function canCreateValidExtRef(fcda: Element, controlBlock: Element | undefined): boolean;
export declare const serviceTypes: Partial<Record<string, string>>;
/**
 * Create a new ExtRef Element depending on the SCL Edition copy attributes from the Control Element,
 * FCDA Element and related Elements.
 *
 * @param controlElement - `ReportControl`, `GSEControl` or `SampledValueControl` source element
 * @param fcdaElement    - The source data attribute element.
 * @returns The new created ExtRef element, which can be added to the document.
 */
export declare function createExtRefElement(controlElement: Element | undefined, fcdaElement: Element): Element;
/**
 * Create a clone of the passed ExtRefElement and updated or set the required attributes on the cloned element
 * depending on the Edition and type of Control Element.
 *
 * @param extRefElement  - The ExtRef Element to clone and update.
 * @param controlElement - `ReportControl`, `GSEControl` or `SampledValueControl` source element
 * @param fcdaElement    - The source data attribute element.
 * @returns A cloned ExtRef Element with updated information to be used for example in a Replace Action.
 */
export declare function updateExtRefElement(extRefElement: Element, controlElement: Element | undefined, fcdaElement: Element): Element;
export declare function getOrderedIeds(doc: XMLDocument): Element[];
/**
 * An element within this list has 2 properties:
 * - The element itself, either a GSEControl or an IED at this point.
 * - A 'partial' property indicating if the GOOSE is fully initialized or partially.
 */
export interface ListElement {
    element: Element;
    partial?: boolean;
}
export declare class SubscriberListContainer extends LitElement {
    /** List holding all current subscribed Elements. */
    subscribedElements: ListElement[];
    /** List holding all current available Elements which are not subscribed. */
    availableElements: ListElement[];
    /** Current selected IED (when in Subscriber view) */
    currentSelectedIed: Element | undefined;
    /** The current used dataset for subscribing / unsubscribing */
    currentUsedDataset: Element | undefined | null;
    subscriberWrapper: Element;
    protected updated(): void;
    protected resetElements(): void;
}
/** Common `CSS` styles used by DataTypeTemplate subeditors */
export declare const styles: import("lit-element").CSSResult;
declare global {
    interface ElementEventMap {
        ['view']: ViewEvent;
        ['ied-select']: IEDSelectEvent;
        ['fcda-select']: FcdaSelectEvent;
        ['subscription-changed']: SubscriptionChangedEvent;
    }
}
