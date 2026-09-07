/** Selects edition depending array of `P` element types
 *  Supported Editions are 1 (2003), 2 (2007B) and 2.1 (2007B4)
 */
export declare function getTypes(element: Element): string[];
export declare const pTypesGSESMV: string[];
/** Patterns from IEC 61850-6 for all `P` elements */
export declare const typePattern: Partial<Record<string, string>>;
/** Whether `P` element is required within `Address` */
export declare const typeNullable: Partial<Record<string, boolean>>;
/** Max length definition for all `P` element */
export declare const typeMaxLength: Partial<Record<string, number>>;
