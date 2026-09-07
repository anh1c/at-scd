import { Create } from '@compas-oscd/core';
/**
 * List of supported Common Data Classes in the 104 protocol.
 */
export declare const supportedCdcTypes: readonly ["ACD", "ACT", "APC", "ASG", "BAC", "BCR", "BSC", "CMV", "DEL", "DPC", "DPS", "ENC", "ENG", "ENS", "INC", "ING", "INS", "ISC", "MV", "SEC", "SPC", "SPG", "SPS", "WYE"];
export type SupportedCdcType = (typeof supportedCdcTypes)[number];
export type CreateFunction = (lnElement: Element, lnClonedElement: Element, doElement: Element, wizard: Element, ti: string, daPaths: DaSelector[], inverted: boolean) => Create[];
export type CreateCheckFunction = (lnElement: Element, lnClonedElement: Element, doElement: Element, wizard: Element, ti: string, daPaths: DaSelector[]) => Create[];
export interface DaSelector {
    path: string[];
}
export interface TiInformation {
    daPaths: DaSelector[];
    create: CreateFunction;
    checkDaPaths?: DaSelector[];
    checkCreate?: CreateCheckFunction;
    inverted?: boolean;
}
/**
 * Record with configuration information on how to create Address elements for the 104 protocol.
 * Per supported Common Data Class (CDC) two record sets can be configured, one for the monitoring part
 * and one for the control part.
 * Per set the key of the record will be the ti value, meaning the list of keys will be the supported
 * ti values allowed for the CDC.
 * For each supported ti value there is information on how to find the DAI Element to which to create
 * the Address element(s).
 */
export declare const cdcProcessings: Record<SupportedCdcType, {
    monitor: Record<string, TiInformation>;
    control: Record<string, TiInformation>;
}>;
/**
 * Create or update the 104 Private Element, if the Private already exists, the new Address Elements are
 * added, otherwise a new Private Element is created to which the Address Elements are added.
 * The correct Create Action is returned.
 *
 * @param daiElement      - The DAI Element which will hold the new or existing Private Element
 * @param addressElements - The Address Elements to be created with Create Actions.
 */
export declare function createActionsForPrivate(daiElement: Element, addressElements: Element[]): Create[];
/**
 * Creates one or two Address Elements, depending on the value of inverted.
 *
 * @param document      - The Owner Document used to create the new Address Element with.
 * @param ti            - The value to be set on the attribute 'ti'.
 * @param inverted      - Indicates if extra Address Elements should be created with 'inverted=true'.
 * @param expectedValue - The optional value of the attribute 'expectedValue' if needed.
 * @returns Array of one or two Address Elements created.
 */
export declare function createAddressElements(document: Document, ti: string, inverted: boolean, expectedValue?: string): Element[];
/**
 * Use the DA Path configuration of a Common Data Class to search for all DO/BDA/DA Elements to create
 * a structure for which DOI/SDI/DAI Elements should be created later. Null will be returned when an invalid
 * Template Structure is described by the DA Path.
 *
 * @param doElement - The DO Element to start searching for DA/BDA Elements.
 * @param daPath    - The (B)DA Elements to find in the template structure.
 * @returns List of Elements starting with the DO Element followed by one or more (B)DA Elements describing the structure.
 */
export declare function createTemplateStructure(doElement: Element, daPath: DaSelector): Element[] | null;
/**
 * Use the DO Element and a DA Selector to create a CSS Query to search for a DAI Element
 * below the LN Element.
 *
 * @param doElement - The DO Element for which to search a DOI Element.
 * @param daPath    - The DA Selector to create the query to find the SDI/DAI Elements.
 */
export declare function createDaiFilter(doElement: Element, daPath: DaSelector): string;
/**
 * Indicates if the combination cdc/ti should handle/process the attribute "unitMultiplier" of the Address Element.
 *
 * @param cdc - The Common Data Class.
 * @param ti  - The TI Value.
 * @returns true, if the combination should handle/process the attribute "unitMultiplier".
 */
export declare function hasUnitMultiplierField(cdc: string, ti: string): boolean;
/**
 * Indicates if the combination cdc/ti should handle/process the attributes "scaleMultiplier" and "scaleOffset" of
 * the Address Element.
 *
 * @param cdc - The Common Data Class.
 * @param ti  - The TI Value.
 * @returns true, if the combination should handle/process the attributes "scaleMultiplier" and "scaleOffset".
 */
export declare function hasScaleFields(cdc: string, ti: string): boolean;
