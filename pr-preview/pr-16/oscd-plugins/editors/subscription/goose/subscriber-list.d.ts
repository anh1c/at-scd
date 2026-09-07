import { TemplateResult } from 'lit-element';
import '@material/mwc-icon';
import '@material/mwc-list';
import '@material/mwc-list/mwc-list-item';
import '@compas-oscd/open-scd/dist/filtered-list.js';
import { ListElement, SubscriberListContainer, SubscribeStatus } from '../foundation.js';
/** An sub element for subscribing and unsubscribing IEDs to GOOSE messages. */
export declare class SubscriberList extends SubscriberListContainer {
    doc: XMLDocument;
    editCount: number;
    /** Current selected GOOSE message (when in GOOSE Publisher view) */
    currentSelectedGseControl: Element | undefined;
    /** The name of the IED belonging to the current selected GOOSE */
    currentGooseIedName: string | undefined | null;
    constructor();
    private onIEDSelectEvent;
    private onGOOSESelectEvent;
    private onGooseSubscriptionEvent;
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
