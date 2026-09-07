import { TemplateResult } from 'lit-element';
import '@material/mwc-icon-button-toggle';
import { IconButtonToggle } from '@material/mwc-icon-button-toggle';
import '@compas-oscd/open-scd/dist/action-pane.js';
import { Container } from './foundation.js';
/** [[`IED`]] plugin subeditor for editing `(B)DA` element. */
export declare class DAContainer extends Container {
    /**
     * The optional DAI of this (B)DA.
     */
    instanceElement: Element;
    toggleButton: IconButtonToggle | undefined;
    private header;
    /**
     * Get the nested (B)DA element(s) if available.
     * @returns The nested (B)DA element(s) of this (B)DA container.
     */
    private getBDAElements;
    /**
     * Use the list of ancestor to retrieve the list from DO to the current (B)DA Element.
     * This structure is used to create the initialized structure from (DOI/SDI/DAI).
     *
     * @returns The list from the DO Element to the current (B)DA Element.
     */
    private getTemplateStructure;
    private openCreateWizard;
    private openEditWizard;
    private getValueDisplayString;
    private renderVal;
    render(): TemplateResult;
    static styles: import("lit-element").CSSResult;
}
