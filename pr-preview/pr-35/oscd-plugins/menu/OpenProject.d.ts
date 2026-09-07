import { LitElement, TemplateResult } from 'lit-element';
export default class OpenProjectPlugin extends LitElement {
    pluginFileUI: HTMLInputElement;
    openDoc(event: Event): Promise<void>;
    private closeMenu;
    run(): Promise<void>;
    render(): TemplateResult;
    static styles: import("lit-element").CSSResult;
}
