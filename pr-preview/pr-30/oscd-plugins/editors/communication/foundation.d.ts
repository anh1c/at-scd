/**
 * Returns the first element of type ConnectedAP in the provided element's hierarchy.
 * @param element - The reference element to search from
 * @returns An element of type ConnectedAP or null
 */
export declare function getCurrentConnectedAP(element: Element): Element | null;
/**
 * Retrieves all ConnectedAP elements within the same IED as the provided element.
 *
 * @param element - The reference element to find the current ConnectedAP and its IED.
 * @param doc - The XML document containing the SubNetwork and ConnectedAP elements.
 * @returns An array of ConnectedAP elements belonging to the same IED as the provided element.
 */
export declare function getAllConnectedAPsOfSameIED(element: Element, doc: XMLDocument): Element[];
export declare function canMoveCommunicationElementToConnectedAP(communicationElement: Element, connectedAP: Element, doc: XMLDocument): boolean;
