import { WizardActor, WizardInputElement } from '@compas-oscd/open-scd/dist/foundation.js';
export declare function replaceNamingAction(element: Element): WizardActor;
export declare function replaceNamingAttributeWithReferencesAction(element: Element, messageTitleKey: string): WizardActor;
export declare function updateNamingAttributeWithReferencesAction(element: Element, messageTitleKey: string): WizardActor;
export declare function processNamingAttributes(newAttributes: Record<string, string | null>, element: Element, inputs: WizardInputElement[]): void;
export declare function addMissingAttributes(element: Element, newAttributes: Record<string, string | null>): Record<string, string | null>;
