import { LitElement, TemplateResult } from 'lit-element';
import '@material/mwc-button';
import '@material/mwc-icon';
import '@material/mwc-icon-button-toggle';
import '@material/mwc-list/mwc-check-list-item.js';
import '@material/mwc-checkbox';
import { Button } from '@material/mwc-button';
import { List, MWCListIndex } from '@material/mwc-list';
import { ListItem } from '@material/mwc-list/mwc-list-item.js';
import '@compas-oscd/open-scd/dist/filtered-list.js';
/** An editor component for cleaning SCL datasets. */
export declare class CleanupDatasets extends LitElement {
    /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
    doc: XMLDocument;
    disableDataSetClean: boolean;
    unreferencedDataSets: Element[];
    selectedDatasetItems: MWCListIndex;
    cleanupButton: Button;
    dataSetList: List | undefined;
    dataSetItems: ListItem[] | undefined;
    firstUpdated(): Promise<void>;
    /**
     * Provide list item in the DataSet cleanup container.
     * @param dataSet - an unused SCL DataSet element.
     * @returns html for checklist item.
     */
    private renderListItem;
    /**
     * Provide delete button the dataset cleanup container.
     * @returns html for the Delete Button of this container.
     */
    private renderDeleteButton;
    /**
     * Render a user selectable table of unreferenced datasets if any exist, otherwise indicate this is not an issue.
     * @returns html for table and action button.
     */
    private renderUnreferencedDataSets;
    render(): TemplateResult;
    static styles: import("lit-element").CSSResult;
}
