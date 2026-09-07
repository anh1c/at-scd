import { InsertV2 } from '@compas-oscd/core';
import { DaSelector } from './cdc.js';
export declare const supportedCdcTypes: readonly ["ACD", "ACT", "APC", "ASG", "BAC", "BCR", "BSC", "CMV", "DEL", "DPC", "DPS", "ENC", "ENG", "ENS", "INC", "ING", "INS", "ISC", "MV", "SEC", "SPC", "SPG", "SPS", "WYE"];
export type SupportedCdcType = (typeof supportedCdcTypes)[number];
type CdcProcessingV2 = Record<SupportedCdcType, {
    monitor: Record<string, TiInformation>;
    control: Record<string, TiInformation>;
}>;
export type InsertFunction = (lnElement: Element, lnClonedElement: Element, doElement: Element, ti: string, daPaths: DaSelector[], inverted: boolean) => InsertV2[];
export type InsertCheckFunction = (lnElement: Element, lnClonedElement: Element, doElement: Element, ti: string, daPaths: DaSelector[]) => InsertV2[];
export interface TiInformation {
    daPaths: DaSelector[];
    create: InsertFunction;
    checkDaPaths?: DaSelector[];
    checkCreate?: InsertCheckFunction;
    inverted?: boolean;
}
export declare const cdcProcessingsV2: CdcProcessingV2;
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
 * Create or update the 104 Private Element, if the Private already exists, the new Address Elements are
 * added, otherwise a new Private Element is created to which the Address Elements are added.
 * The correct Create Action is returned.
 *
 * @param daiElement      - The DAI Element which will hold the new or existing Private Element
 * @param addressElements - The Address Elements to be created with Create Actions.
 */
export declare function createActionsForPrivate(daiElement: Element, addressElements: Element[]): InsertV2[];
/**
 * Creates a new SCL Private element and add 104 Address element(s) below this.
 * Set the attribute value of 'ti' to the passed ti value.
 *
 * @param lnElement       - The LN(0) Element.
 * @param lnClonedElement - The Cloned LN Element, used to create new structure and determine which Create actions are needed.
 * @param doElement       - The DO Element.
 * @param wizard          - Wizard Element to dispatch events on.
 * @param ti              - The value to be set on the attribute 'ti'.
 * @param daPaths         - The Array of DAI Elements to search or create and add the Private Element on.
 * @param inverted        - Indicates if extra Address Elements should be created with 'inverted=true'.
 * @returns An array of Create Action that the wizard action will return.
 */
export declare function createAddressEdits(lnElement: Element, lnClonedElement: Element, doElement: Element, ti: string, daPaths: DaSelector[], inverted: boolean): InsertV2[];
export {};
