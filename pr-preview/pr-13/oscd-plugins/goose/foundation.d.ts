import { SubscribeStatus } from '../foundation.js';
export interface GOOSESelectDetail {
    gseControl: Element | undefined;
    dataset: Element | undefined;
}
export type GOOSESelectEvent = CustomEvent<GOOSESelectDetail>;
export declare function newGOOSESelectEvent(gseControl: Element | undefined, dataset: Element | undefined, eventInitDict?: CustomEventInit<GOOSESelectDetail>): GOOSESelectEvent;
export interface GooseSubscriptionDetail {
    element: Element;
    subscribeStatus: SubscribeStatus;
}
export type GooseSubscriptionEvent = CustomEvent<GooseSubscriptionDetail>;
export declare function newGooseSubscriptionEvent(element: Element, subscribeStatus: SubscribeStatus): GooseSubscriptionEvent;
declare global {
    interface ElementEventMap {
        ['goose-select']: GOOSESelectEvent;
        ['goose-subscription']: GooseSubscriptionEvent;
    }
}
