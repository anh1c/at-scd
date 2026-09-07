import { Delete } from '@compas-oscd/core';
/**
 * Clean SCL items as requested by removing SCL elements specified from the SCL file
 * @param cleanItems - SCL elements to be removed from the SCL file
 * @returns an actions array to support undo/redo
 */
export declare function cleanSCLItems(cleanItems: Element[]): Delete[];
/**
 * Provide frequency count of elements.
 * @param arr - An array of elements
 * @returns a Map of element strings and frequencies
 */
export declare function countBy(arr: string[]): Map<string, number>;
/**
 * Sort a list of Elements by their identity string.
 * @param elements - an array of Elements.
 * @returns a sorted list of elements.
 */
export declare function identitySort(elements: Element[]): Element[];
/**
 * Return a de-duplicate set of array elements.
 * @param arr - an array of items with duplicates.
 * @returns an array of items without duplicates.
 */
export declare function uniq(arr: unknown[]): unknown[];
