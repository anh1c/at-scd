import { TemplateResult } from 'lit-element';
import '@compas-oscd/open-scd/dist/wizard-textfield.js';
import { Wizard, WizardActor } from '@compas-oscd/open-scd/dist/foundation.js';
export declare function updateValue(element: Element, val: Element): WizardActor;
export declare function createValue(parent: Element, element: Element, newElement: Element, instanceElement: Element, numberOfmultipleSettings?: number): WizardActor;
export declare function renderDAIWizard(element: Element, instanceElement?: Element, numberOfmultipleSettings?: number | null): TemplateResult[];
export declare function createDAIWizard(parent: Element, newElement: Element, element: Element): Wizard;
export declare function editDAIWizard(element: Element, instanceElement?: Element): Wizard;
