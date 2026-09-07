import { TemplateResult } from 'lit-element';
/**
 * Retrieve the full path as wanted for the IED Container in the 104 Plugin, meaning we go higher in the
 * hierarchy until the parent found is the IED, this element is excluded, because the containers are group per
 * IED.
 * From all parent between the DAI and IED the name or likely attributes are used to define a unique name.
 *
 * @param element - The DAI Element for which the full path needs to be defined.
 * @param topLevelTagName - Name of the Tag to stop at when travelling through the parents (excluding).
 * @returns The full path shown to the user for a DAI Element.
 */
export declare function getFullPath(element: Element, topLevelTagName: string): string;
/**
 * Retrieve the CDC Value that belongs to a DAI Element, meaning, using the DOI/LN Elements to
 * search for a DO Element, which is again used to find the DO/DOType Element. The DOType Element
 * finally holds the attribute 'cdc'.
 *
 * @param doiElement - The DOI Element to start the search for the CDC Value.
 * @returns The CDC Value from the DOType Element.
 */
export declare function getCdcValueFromDOIElement(doiElement: Element): string | null;
export declare function getCdcValueFromDOElement(doElement: Element): string | null;
/**
 * Create a string to display all information about a 104 Address element.
 * A list of attributes is used to determine what can be displayed if available.
 *
 * @param daiElement - The DAI Element used if the attribute 'expectedValue' exists to retrieve the Enum Value.
 * @param address    - The Address element from which to retrieve all attribute values.
 * @returns A string to display with all attribute values.
 */
export declare function get104DetailsLine(daiElement: Element, address: Element): string;
/**
 * Extract the 'type' attribute from the given XML element.
 * @param element - The element to extract instance from.
 * @returns the value, or undefined if there is no instance.
 */
export declare function getTypeAttribute(element: Element): string | undefined;
/**
 * Search for a DAI Element below the passed DOI Element.
 *
 * @param doElement - The DO Element to search on.
 * @param name      - The name of the DA Element to search for.
 * @returns The found DA Element or null, if not found.
 */
export declare function getDaElement(doElement: Element, name: string): Element | null;
/**
 * Search for the Value of a DAI Element below the passed DOI Element.
 *
 * @param doElement - The DO Element to search on.
 * @param name      - The name of the DA Element to search for.
 * @returns The value (Val) of the found DA Element or null, if not found.
 */
export declare function getDaValue(doElement: Element, name: string): string | null;
/**
 * Search for a DAI Element below the passed DOI Element.
 *
 * @param doiElement - The DOI Element to search on.
 * @param name       - The name of the DAI Element to search for.
 * @returns The found DAI Element or null, if not found.
 */
export declare function getDaiElement(doiElement: Element, name: string): Element | null;
/**
 * Search for the Value of a DAI Element below the passed DOI Element.
 *
 * @param doiElement - The DOI Element to search on.
 * @param name       - The name of the DAI Element to search for.
 * @returns The value (Val) of the found DAI Element or null, if not found.
 */
export declare function getDaiValue(doiElement: Element, name: string): string | null;
export declare function getDoiElement(lnElement: Element, doName: string): Element | null;
export declare function getDoElement(lnElement: Element, doName: string): Element | null;
export declare function getDoElements(lnElement: Element): Element[];
/**
 * Search for the DAI Element 'ctlModel', this one indicates if control Addresses need to be created.
 *
 * @param lnElement - The LN Element.
 * @param doElement - The DO Element.
 * @returns The value of the CtlModel.
 */
export declare function getCtlModel(lnElement: Element, doElement: Element): string | null;
/**
 * Retrieve the DA or BDA Element that's linked to the DAI Element passed.
 *
 * @param daiElement - The DAI Element for which to search the linked DA Element.
 */
export declare function getDaElementByDaiElement(daiElement: Element): Element | undefined;
/**
 * Check if the DA Element that's linked to the DAI Element is of the bType 'Enum'.
 *
 * @param daiElement - The DAI Element for which to check.
 */
export declare function isEnumDataAttribute(daiElement: Element): boolean;
/**
 * Retrieve the value of the Enum with passed 'ord' configured with the passed DAI Element.
 *
 * @param daiElement - The DAI Element that is configured as Enum Type.
 * @param ord        - The value of the attribute 'ord' to search the value of.
 */
export declare function getEnumVal(daiElement: Element, ord: string): string | null;
/**
 * Retrieve all the 'ord' value the EnumType has configured with his values.
 *
 * @param daiElement - The DAI Element that is configured as Enum Type.
 */
export declare function getEnumOrds(daiElement: Element): string[];
/**
 * Search for the Element passed from the Cloned LN Structure in the original LN Structure.
 * If that element exists in the original LN Structure it will be returned.
 * If the cloned Element is a new Element 'null' will be returned.
 *
 * @param lnElement     - The original LN Element with the existing Elements.
 * @param clonedElement - The Element to search for in the existing structure using its key.
 * @returns The original element found or null if it didn't exist before.
 */
export declare function findElementInOriginalLNStructure(lnElement: Element, clonedElement: Element): Element | null;
/**
 * Create a wizard-textfield element for the wizards within the Network part of the 104 plugin.
 * @param pType - The type of P a Text Field has to be created for.
 * @returns - A Text Field created for a specific type for the Create wizard.
 */
export declare function createNetworkTextField(pType: string, maybeValue?: string): TemplateResult;
/**
 * Enumeration stating the active view of the 104 plugin.
 */
export declare enum View {
    VALUES = 0,
    NETWORK = 1
}
export declare const VIEW_EVENT_NAME = "view-change-104-plugin";
export interface ViewDetail {
    view: View;
}
export type ViewEvent = CustomEvent<ViewDetail>;
export declare function newViewEvent(view: View): ViewEvent;
declare global {
    interface ElementEventMap {
        [VIEW_EVENT_NAME]: ViewEvent;
    }
}
