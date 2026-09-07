import { TemplateResult } from 'lit-element';
import '@material/mwc-icon-button-toggle';
import { IconButtonToggle } from '@material/mwc-icon-button-toggle';
import '@compas-oscd/open-scd/dist/action-pane.js';
import './da-container.js';
import { Container } from './foundation.js';
/** [[`IED`]] plugin subeditor for editing `DO` element. */
export declare class DOContainer extends Container {
    /**
     * The optional DOI of this DO.
     */
    instanceElement: Element;
    toggleButton: IconButtonToggle | undefined;
    private header;
    /**
     * Get the nested SDO element(s).
     * @returns The nested SDO element(s) of this DO container.
     */
    private getDOElements;
    /**
     * Get the nested (B)DA element(s).
     * @returns The nested (B)DA element(s) of this DO container.
     */
    private getDAElements;
    /**
     * Get the instance element (SDI) of a (S)DO element (if available)
     * @param dO - The (S)DO object to search with.
     * @returns The optional SDI element.
     */
    private getInstanceDOElement;
    render(): TemplateResult;
}
