import { LitElement, TemplateResult } from 'lit-element';
export declare function isValidReference(doc: XMLDocument, identity: string | number): boolean;
export declare function mergeSubstation(element: Element, currentDoc: Document, docWithSubstation: Document): void;
export default class UpdateSubstationPlugin extends LitElement {
    doc: XMLDocument;
    pluginFileUI: HTMLInputElement;
    updateSubstation(event: Event): Promise<void>;
    run(): Promise<void>;
    render(): TemplateResult;
    static styles: import("lit-element").CSSResult;
}
