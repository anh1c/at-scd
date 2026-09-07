/**
 * A point is a position containing a x and a y within a SCL file.
 */
export interface Point {
    x: number;
    y: number;
}
export declare const SCL_COORDINATES_NAMESPACE = "http://www.iec.ch/61850/2003/SCLcoordinates";
/**
 * Get the coordinates of a XML element (x and y coordinates).
 * @param element - The element to extract coordinates from.
 * @returns A point containing the coordinates.
 */
export declare function getRelativeCoordinates(element: Element): Point;
/**
 * Get the absolute (its own and all parents') coordinates of a SCL element (x and y coordinates)
 * @param element - The element to extract coordinates from.
 * @returns A point containing the coordinates.
 */
export declare function getAbsoluteCoordinates(element: Element): Point;
/**
 * Checking of an element is a BusBar or not.
 * @param element - The element to check.
 * @returns Is the element a BusBar or not.
 */
export declare function isBusBar(element: Element): boolean;
/**
 * Get all the connected terminals to a given element.
 * @param element - The element to check.
 * @returns All connected terminals.
 */
export declare function getConnectedTerminals(element: Element): Element[];
/**
 * Calculate the SCL x and y coordinate of a Connectivity Node.
 * The algorithm is as follow:
 * - Get all elements that are connected to this Connectivity Node.
 * - Extract the SCL x and y coordinates of these Connectivity Nodes and add them up.
 * - Divide the final x and y numbers by the number of connected elements. This way, you get an so-called average.
 * @param cNodeElement  - The Connectivity Node to calculate the X and Y Coordinates for.
 * @returns The calculated SCL x and y coordinates for this Connectivity Node.
 */
export declare function calculateConnectivityNodeCoordinates(cNodeElement: Element): Point;
export declare function getCommonParentElement(leftElement: Element, rightElement: Element, defaultParent: Element | null): Element | null;
