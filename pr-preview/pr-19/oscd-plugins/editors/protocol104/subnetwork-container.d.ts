import { TemplateResult } from 'lit-element';
import '@omicronenergy/oscd-ui/iconbutton/oscd-icon-button.js';
import './connectedap-editor.js';
import { Base104Container } from './base-container.js';
/** [[`104`]] subeditor for a `SubNetwork` element. */
export declare class SubNetwork104Container extends Base104Container {
    /** SCL element SubNetwork */
    element: Element;
    get bitrate(): string | null;
    private openConnectedAPwizard;
    private renderIedContainer;
    private subNetworkSpecs;
    private header;
    render(): TemplateResult;
    static styles: import("lit-element").CSSResult;
}
