import { LitElement } from 'lit-element';
import { SimpleAction } from '@compas-oscd/core';
export declare function createMissingIEDNameSubscriberInfo(doc: Document): SimpleAction[];
export default class SubscriberInfoPlugin extends LitElement {
    doc: XMLDocument;
    run(): Promise<void>;
}
