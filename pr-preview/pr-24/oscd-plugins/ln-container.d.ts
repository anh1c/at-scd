import { TemplateResult } from 'lit-element';
import { IconButtonToggle } from '@material/mwc-icon-button-toggle';
import '@compas-oscd/open-scd/dist/action-pane.js';
import './do-container.js';
import { Container } from './foundation.js';
/** [[`IED`]] plugin subeditor for editing `LN` and `LN0` element. */
export declare class LNContainer extends Container {
    toggleButton: IconButtonToggle | undefined;
    private header;
    /**
     * Get the DO child elements of this LN(0) section.
     * @returns The DO child elements, or an empty array if none are found.
     */
    private getDOElements;
    /**
     * Get the instance element (DOI) of a DO element (if available)
     * @param dO - The DO object to use.
     * @returns The optional DOI object.
     */
    private getInstanceElement;
    private openEditWizard;
    private removeElement;
    render(): TemplateResult;
}
