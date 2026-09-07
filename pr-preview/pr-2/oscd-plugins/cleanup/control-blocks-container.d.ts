import { LitElement, TemplateResult } from 'lit-element';
import '@material/mwc-button';
import '@material/mwc-icon';
import '@material/mwc-icon-button-toggle';
import '@material/mwc-list/mwc-check-list-item.js';
import '@material/mwc-checkbox';
import { Button } from '@material/mwc-button';
import { Checkbox } from '@material/mwc-checkbox';
import { MWCListIndex } from '@material/mwc-list';
import { ListItem } from '@material/mwc-list/mwc-list-item.js';
import '@compas-oscd/open-scd/dist/filtered-list.js';
import { FilteredList } from '@compas-oscd/open-scd/dist/filtered-list.js';
/** An editor component for cleaning SCL Control Blocks. */
export declare class CleanupControlBlocks extends LitElement {
    /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
    doc: XMLDocument;
    disableControlClean: boolean;
    unreferencedControls: Element[];
    selectedControlItems: MWCListIndex;
    cleanButton: Button;
    cleanupList: FilteredList | undefined;
    cleanupListItems: ListItem[] | undefined;
    cleanupAddressCheckbox: Checkbox | undefined;
    cleanupGSEControlFilter: Button;
    cleanupSampledValueControlFilter: Button;
    cleanupLogControlFilter: Button;
    cleanupReportControlFilter: Button;
    /**
     * Toggle the class hidden in the unused controls list for use by filter buttons.
     * @param selectorType - class for selection to toggle the hidden class used by the list.
     */
    private toggleHiddenClass;
    /**
     * Initial update after container is loaded.
     */
    firstUpdated(): Promise<void>;
    /**
     * Create a button for filtering in the control block cleanup container.
     * @param controlType - SCL Control Type e.g. GSEControl.
     * @param initialState - boolean representing whether button is on or off.
     * @returns html for the icon button.
     */
    private renderFilterIconButton;
    /**
     * Provide list item in the control block cleanup container.
     * @param controlBlock - an unused SCL ControlBlock element.
     * @returns html for checklist item.
     */
    private renderListItem;
    /**
     * Provide delete button the control block cleanup container.
     * @returns html for the Delete Button of this container.
     */
    private renderDeleteButton;
    /**
     * Render a user selectable table of unreferenced datasets if any exist, otherwise indicate this is not an issue.
     * @returns html for table and action button.
     */
    private renderUnreferencedControls;
    render(): TemplateResult;
    static styles: import("lit-element").CSSResult;
}
