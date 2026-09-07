import { SubscribeStatus } from '../foundation.js';
export interface SmvSelectDetail {
    smvControl: Element | undefined;
    dataset: Element | undefined;
}
export type SmvSelectEvent = CustomEvent<SmvSelectDetail>;
export declare function newSmvSelectEvent(smvControl: Element | undefined, dataset: Element | undefined, eventInitDict?: CustomEventInit<SmvSelectDetail>): SmvSelectEvent;
export interface SmvSubscriptionDetail {
    element: Element;
    subscribeStatus: SubscribeStatus;
}
export type SmvSubscriptionEvent = CustomEvent<SmvSubscriptionDetail>;
export declare function newSmvSubscriptionEvent(element: Element, subscribeStatus: SubscribeStatus): SmvSubscriptionEvent;
declare global {
    interface ElementEventMap {
        ['smv-select']: SmvSelectEvent;
        ['smv-subscription']: SmvSubscriptionEvent;
    }
}
