import { TemplateResult } from 'lit-element';
import '@material/mwc-icon';
import '@material/mwc-list';
import '@material/mwc-list/mwc-list-item';
import '@compas-oscd/open-scd/dist/filtered-list.js';
import { ListElement, SubscriberListContainer, SubscribeStatus } from '../foundation.js';
/** An sub element for subscribing and unsubscribing IEDs to Sampled Values messages. */
export declare class SubscriberList extends SubscriberListContainer {
    doc: XMLDocument;
    editCount: number;
    /** Current selected Sampled Values element (when in GOOSE Publisher view) */
    currentSelectedSmvControl: Element | undefined;
    /** The name of the IED belonging to the current selected Sampled Values */
    currentSmvIedName: string | undefined | null;
    constructor();
    private onIEDSelectEvent;
    private onSmvSelectEvent;
    private onIEDSubscriptionEvent;
    private onViewChange;
    private subscribe;
    private unsubscribe;
    renderSubscriber(status: SubscribeStatus, element: Element): TemplateResult;
    renderUnSubscribers(elements: ListElement[]): TemplateResult;
    renderPartiallySubscribers(elements: ListElement[]): TemplateResult;
    renderFullSubscribers(): TemplateResult;
    renderTitle(): TemplateResult;
    protected firstUpdated(): void;
    render(): TemplateResult;
    static styles: import("lit-element").CSSResult;
}
