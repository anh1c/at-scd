export declare const PROTOCOL_104_PRIVATE = "IEC_60870_5_104";
export declare const PROTOCOL_104_NS = "http://www.iec.ch/61850-80-1/2007/IEC_60870-5-104";
export declare const PROTOCOL_104_PREFIX = "IEC_60870_5_104";
/**
 * Will add the namespace of the 104 Protocol to the Root Element of the Document (SCL) as prefix to
 * be used with all 104 elements (Address).
 *
 * @param document - The Owner Document used to registered the namespace.
 */
export declare function addPrefixAndNamespaceToDocument(document: Document): void;
/**
 * Get the SCL Private Element with the type set to the 104 Protocol.
 *
 * @param daiElement - The DAI Element to search for the 104 Private Element.
 * @returns The found Private Element or null if not there.
 */
export declare function getPrivateElement(daiElement: Element): Element | null;
/**
 * Create an SCL Private Element with the type set to the 104 Protocol.
 *
 * @param document - The Owner Document used to create the new Private Element with.
 * @returns The created Private Element, <b>not</b> yet added to the DAI Element.
 */
export declare function createPrivateElement(document: Document): Element;
/**
 * Create a 104 Address element which can be added to the Private element.
 * The attribute 'ti' will also be set to value passed.
 *
 * @param document - The Owner Document used to create the new Address Element with.
 * @param ti       - The value for the attribute 'ti'.
 */
export declare function createPrivateAddress(document: Document, ti: string): Element;
