import { TemplateResult } from 'lit-element';
import '@omicronenergy/oscd-ui/icon/oscd-icon.js';
import '@omicronenergy/oscd-ui/action-pane/oscd-action-pane.js';
import './doi-container.js';
import { Base104Container } from './base-container.js';
/**
 * Container showing all the DOI Elements, related to the 104 Protocol, of the passed IED Element in a container.
 */
export declare class Ied104Container extends Base104Container {
    element: Element;
    isExpanded: boolean;
    get doiElements(): Element[];
    protected firstUpdated(): void;
    get header(): string;
    private renderDoiList;
    render(): TemplateResult;
    static styles: import("lit-element").CSSResult;
}
