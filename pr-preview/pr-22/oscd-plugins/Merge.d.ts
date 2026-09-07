import { LitElement, TemplateResult } from 'lit-element';
export default class MergePlugin extends LitElement {
    doc: XMLDocument;
    pluginFileUI: HTMLInputElement;
    mergeDoc(event: Event): void;
    run(): Promise<void>;
    render(): TemplateResult;
    static styles: import("lit-element").CSSResult;
}
