import { LitElement, TemplateResult } from 'lit-element';
/** A tooltip element that follows the mouse cursor and displays a text box. */
export declare class OscdTooltip extends LitElement {
    text: string;
    visible: boolean;
    x: number;
    y: number;
    offset: number;
    private pendingFrame;
    show(text: string, clientX: number, clientY: number): void;
    hide(): void;
    updatePosition(clientX: number, clientY: number): void;
    render(): TemplateResult;
    static styles: import("lit-element").CSSResult;
}
