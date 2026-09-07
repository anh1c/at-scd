import { LitElement, TemplateResult } from 'lit-element';
import '@material/mwc-button';
import '@material/mwc-icon';
import '@material/mwc-icon-button-toggle';
import '@material/mwc-list/mwc-check-list-item.js';
import '@material/mwc-checkbox';
import { Button } from '@material/mwc-button';
import { Checkbox } from '@material/mwc-checkbox';
import { List, MWCListIndex } from '@material/mwc-list';
import { ListItem } from '@material/mwc-list/mwc-list-item.js';
import '@compas-oscd/open-scd/dist/filtered-list.js';
/** An editor component for cleaning SCL DataType templates. */
export declare class CleanupDataTypes extends LitElement {
    /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
    doc: XMLDocument;
    disableControlClean: boolean;
    unreferencedDataTypes: Element[];
    selectedDataTypeItems: MWCListIndex | [];
    cleanButton: Button;
    cleanupList: List | undefined;
    cleanupListItems: ListItem[] | undefined;
    cleanSubTypesCheckbox: Checkbox | undefined;
    cleanupDATypeFilter: Button;
    cleanupEnumTypeFilter: Button;
    cleanupLNodeTypeFilter: Button;
    cleanupDOTypeFilter: Button;
    /**
     * Initial update after container is loaded.
     */
    firstUpdated(): Promise<void>;
    /**
     * Toggle the class hidden in the unused data type list for use by filter buttons to ensure selection works correctly.
     * @param selectorType - class for selection to toggle the hidden class used by the list.
     */
    private toggleHiddenClass;
    /**
     * Create a button for filtering in the data type cleanup container.
     * @param dataType - SCL Data Type e.g. DOType.
     * @param initialState - boolean representing whether button is on or off.
     * @returns html for the icon button.
     */
    private renderFilterIconButton;
    /**
     * Opens an editor for a given data type.
     * @param dType - SCL datatype element.
     */
    private openDataTypeEditor;
    /**
     * Return secondary descriptive parameter for a data type.
     * @param dType - SCL datatype element.
     * @returns string with secondary descriptive parameter for a data type
     */
    private getDataTypeSecondaryText;
    /**
     * Provide list item in the data type cleanup container.
     * @param dType - an unused SCL DataType element (LNodeType, DOType, DAType EnumType).
     * @returns html for checklist item.
     */
    private renderListItem;
    /**
     * Recurses through all datatype templates and indexes their usage.
     * @returns a map of data type templates usage by id.
     */
    private indexDataTypeTemplates;
    /**
     * Given a datatype reference return the appropriate datatype object or null.
     * @param element - the SCL Element for which a datatype is required.
     * @returns either the datatype or null.
     */
    private getSubType;
    /**
     * Recurses from an initial element to find all child references (with duplicates).
     * @param rootElement - root SCL Element for which all child datatype references are required.
     * @returns the id value for all SCL element datatypes traversed.
     */
    private fetchTree;
    /**
     * Get items from selection list and and any subtypes.
     * @returns An array of SCL elements representing selected items and subtypes as required.
     */
    getCleanItems(): Element[];
    /**
     * Provide delete button the data type cleanup container.
     * @returns html for the Delete Button of this container.
     */
    private renderDeleteButton;
    /**
     * Find unused types by scanning the SCL and comparing with the DataTypeTemplates.
     * @param usedSelector - CSS selector for SCL type's instantiated name, e.g. LN, LN0.
     * @param keyAttributeName - attribute name for SCL types uniqueness guarantee, e.g. lnType.
     * @param templateSelector - CSS selector for SCL template element in DataTypeTemplate section.
     * @returns an array of unreferenced elements sorted by their identity string.
     */
    private getUnusedType;
    /**
     * Find unused types by scanning the SCL and comparing with the DataTypeTemplates.
     * @returns an array of unreferenced elements
     */
    private getUnusedTypes;
    /**
     * Render a user selectable table of unreferenced DataTypes if any exist.
     * @returns html for table and action button.
     */
    private renderUnreferencedDataTypes;
    render(): TemplateResult;
    static styles: import("lit-element").CSSResult;
}
