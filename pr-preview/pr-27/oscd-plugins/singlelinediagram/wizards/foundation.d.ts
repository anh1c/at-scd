import { TemplateResult } from 'lit-element';
import { WizardActor } from '@compas-oscd/open-scd/dist/foundation.js';
export declare function getNameAttribute(element: Element): string | null;
export declare function getDescAttribute(element: Element): string | null;
export declare function getXCoordinateAttribute(element: Element): string | null;
export declare function getYCoordinateAttribute(element: Element): string | null;
export declare function getFixedCoordinateValue(value: string | null): string | null;
export declare function updateNamingAndCoordinatesAction(element: Element): WizardActor;
export declare function renderXYCoordinateFields(xCoordinate: string | null, yCoordinate: string | null): TemplateResult[];
