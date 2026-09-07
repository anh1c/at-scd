import { Point } from './foundation.js';
/** Default 'grid size' of our SVG */
export declare const SVG_GRID_SIZE = 64;
/** Size of SLC element ConductingEquipment or PowerTransformer */
export declare const EQUIPMENT_SIZE = 50;
/** The size of SLC element ConnectivityNode */
export declare const CNODE_SIZE = 25;
type Direction = 'top' | 'right' | 'bottom' | 'left';
/** Start and end direction of the route */
export interface PointDirections {
    startDirection: Direction;
    endDirection: Direction;
}
/**
 * Get the full position of an element (multiplied with an offset for the SVG).
 * It's just a matter of adding all the position up of the element including it's parent(s).
 * @param element - The SCL element to get the position for.
 * @returns A point containing the full x/y position.
 */
export declare function getAbsolutePosition(element: Element): Point;
/**
 * Get the full position of an bus bar (multiplied with an offset for the SVG).
 * @param busbar - The SCL element Bay to get the position for.
 * @returns A point containing the full x/y position in px.
 */
export declare function getAbsolutePositionBusBar(busbar: Element): Point;
/**
 * Get the full position of an ConnectivityNode SCL element (multiplied with an offset for the SVG).
 * @param connectivityNode - The SCL element ConnectivityNode to get the position for.
 * @returns A point containing the full x/y position in px.
 */
export declare function getAbsolutePositionConnectivityNode(connectivityNode: Element): Point;
/**
 * Get the absolute position in py for a equipments Terminal (based on the TERMINAL_OFFSET).
 * @param equipment - The SCL elements ConductingEquipment or PowerTransformer.
 * @param direction - On which side does the terminal needs to be placed relative to the given point.
 */
export declare function getAbsolutePositionTerminal(equipment: Element, direction: Direction): Point;
/**
 * Get the absolute position in px for a SLC element ConnectivityNode drawing start/end (based on the TERMINAL_OFFSET).
 * @param cNode - The SCL element ConnectivityNode
 * @param direction - The direction of the connector from/to the ConnectivityNode
 */
export declare function getConnectivityNodesDrawingPosition(cNode: Element, direction: Direction): Point;
/**
 * Create a Substation <g> element.
 * @param substation - The Substation from the SCL document to use.
 * @returns A Substation <g> element.
 */
export declare function createSubstationElement(substation: Element): SVGElement;
/**
 * Create a Voltage Level <g> element.
 * @param voltageLevel - The Voltage Level from the SCL document to use.
 * @returns A Voltage Level <g> element.
 */
export declare function createVoltageLevelElement(voltageLevel: Element): SVGElement;
/**
 * Create a Bay <g> element.
 * @param bayElement - The Bay from the SCL document to use.
 * @returns A Bay <g> element.
 */
export declare function createBayElement(bayElement: Element): SVGGraphicsElement;
/**
 * Add a Text Element to the top of the Bay
 *
 * @param rootGroup - The Root group containing all groups.
 * @param bayElement - The Bay from the SCL document to use.
 * @param clickAction - The action to execute when the Name of the Bay is being clicked.
 */
export declare function addLabelToBay(rootGroup: SVGElement, bayElement: Element, clickAction?: (event: Event) => void): void;
/**
 * Create a basic caption.
 * @param textContent - The content of the caption.
 * @param coordinates - The x and y position in px to locate in drawing pane.
 * @param textSize - The size of the caption
 * @returns The text SVG element.
 */
export declare function createTextElement(textContent: string, coordinates: Point, textSize: string): SVGGraphicsElement;
/**
 * Create a Terminal element.
 * @param terminal - The SCL element Terminal to draw
 * @param sideToDraw - The side of the element the terminal must be drawn on.
 * @param clickAction - The action to execute when the terminal is being clicked.
 * @returns The terminal SVG element.
 */
export declare function createTerminalElement(terminal: Element, sideToDraw: Direction, clickAction?: (event: Event) => void): SVGElement;
/**
 * Create a bus bar element.
 * @param busbarElement - The Bus Bar SCL Element.
 * @param busbarLength - The length of the bus bar depending on the x coordinate of the most far out right equipment ()
 * @returns The Bus Bar SVG element.
 */
export declare function createBusBarElement(busbarElement: Element, busbarLength: number): SVGGraphicsElement;
/**
 * Add a Text Element to the top of the Bay
 *
 * @param rootGroup - The Root group containing all groups.
 * @param busbarElement - The BusBar from the SCL document to use.
 * @param clickAction - The action to execute when the Name of the BusBar is being clicked.
 */
export declare function addLabelToBusBar(rootGroup: SVGElement, busbarElement: Element, clickAction?: (event: Event) => void): void;
/**
 * Create a Conducting Equipment element.
 * @param equipmentElement - The SCL element ConductingEquipment
 * @param clickAction - The action to execute when the Conducting Equipment is being clicked.
 * @returns The Conducting Equipment SVG element.
 */
export declare function createConductingEquipmentElement(equipmentElement: Element, clickAction?: (event: Event) => void): SVGElement;
/**
 * Create a PowerTransformer element.
 * @param powerTransformerElement - The SCL element PowerTransformer
 * @param clickAction - The action to execute when the Power Transformer is being clicked.
 * @returns The Power Transformer SVG element.
 */
export declare function createPowerTransformerElement(powerTransformerElement: Element, clickAction?: (event: Event) => void): SVGElement;
/**
 * Create a Connectivity Node element.
 * @param cNodeElement - The SCL element ConnectivityNode
 * @param clickAction - The action to execute when the Terminal is being clicked.
 * @returns The Connectivity Node SVG element.
 */
export declare function createConnectivityNodeElement(cNodeElement: Element, clickAction?: (event: Event) => void): SVGElement;
/**
 * Draw a route from ConnectivityNode to equipments Terminal (ConductingEquipment or PowerTransformer)
 * @param cNodesTerminalPosition - The start position in px of the SCL element ConnectivityNode.
 * @param equipmentsTerminalPosition - The end position in px of the SCL element ConductingEquipment or PowerTransformer.
 * @param svgElementToDrawOn - The SVG Element to draw the route on.
 */
export declare function drawCNodeConnections(cNodesTerminalPosition: Point, equipmentsTerminalPosition: Point, svgElementToDrawOn: SVGElement): void;
/**
 * Draw a route from the bus bar to elements terminal position.
 * @param busbarsTerminalPosition - The start position in px the bus bar.
 * @param equipmentsTerminalPosition - The end position in px of the SCL element ConductingEquipment or PowerTransformer.
 * @param svgElementToDrawOn - The SVG Element to draw the route on.
 */
export declare function drawBusBarRoute(busbarsTerminalPosition: Point, equipmentsTerminalPosition: Point, svgElementToDrawOn: SVGElement): void;
/**
 * Small simple algorithm deciding on which direction the route should be drawn
 * for a connection between elements Terminal and ConnectivityNode
 * @param equipment - The SCL element ConductingEquipment or PowerTransformer the route starts from.
 * @param cNode -  The SLC element ConnectivityNode the route ends with.
 * @returns The sides of both points .
 */
export declare function getDirections(equipment: Element, cNode: Element): PointDirections;
/**
 * Get the name of the parent of given child element.
 * @param childElement - The child element.
 * @returns The name.
 */
export declare function getParentElementName(childElement: Element): string | undefined;
export declare function getBusBarLength(root: Element): number;
export {};
