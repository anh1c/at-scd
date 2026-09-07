import '@compas-oscd/open-scd/dist/finder-list.js';
import { Path } from '@compas-oscd/open-scd/dist/finder-list.js';
import { Wizard } from '@compas-oscd/open-scd/dist/foundation.js';
/**
 * Retrieve the Data Children needed for the filter-list to display, the elements shown are
 * 'IED' -&gt; 'AccessPoint' -&gt; 'LDevice' -&gt; 'LN(0)' -&gt; 'DO'.
 *
 * @param parent - The previous element selected, starting with SCL Element.
 */
export declare function getDataChildren(parent: Element): Element[];
/**
 * Simple function to retrieve the next element from the path selected.
 * Also check if that element is the expected element.
 *
 * @param doc         - The XML Document to be used for querying.
 * @param path        - The array of selected element to pop the last element name from.
 * @param expectedTag - The tagname expected to be found when popping the lats element.
 */
export declare function checkAndGetLastElementFromPath(doc: XMLDocument, path: Path, expectedTag: string[]): Element | null;
/**
 * Start a Finder List to select a DO that can be initiated to be used for the 104 protocol.
 *
 * @param doc - The XML Document loaded.
 * @returns The Wizard to be displayed in a dialog.
 */
export declare function selectDoWizard(doc: Document): Wizard;
