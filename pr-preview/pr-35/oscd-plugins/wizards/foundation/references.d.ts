import { Delete, Replace } from '@compas-oscd/core';
/**
 * Function to create Replace actions to update reference which point to the name of the element being updated.
 * For instance the IED Name is used in other SCL Elements as attribute 'iedName' to reference the IED.
 * These attribute values need to be updated if the name of the IED changes.
 *
 * An empty array will be returned if the old and new value are the same or no references need to be updated.
 *
 * @param element - The element for which the name is updated.
 * @param oldName - The old name of the element.
 * @param newName - The new name of the element.
 * @returns Returns a list of Replace Actions that can be added to a Complex Action or returned directly for execution.
 */
export declare function updateReferences(element: Element, oldName: string | null, newName: string): Replace[];
/**
 * Function to create Delete actions to remove reference which point to the name of the element being removed.
 * For instance the IED Name is used in other SCL Elements as attribute 'iedName' to reference the IED.
 * These elements need to be removed if the IED is removed.
 *
 * @param element - The element that will be removed and it's name is used to search for references.
 * @returns Returns a list of Delete Actions that can be added to a Complex Action or returned directly for execution.
 */
export declare function deleteReferences(element: Element): Delete[];
