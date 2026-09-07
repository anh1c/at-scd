import { TemplateResult } from 'lit-html';
import '@compas-oscd/open-scd/dist/wizard-textfield.js';
import '@compas-oscd/open-scd/dist/wizard-select.js';
import { Wizard, WizardInput } from '@compas-oscd/open-scd/dist/foundation.js';
export declare function isEmptyObject<T = any>(target: T, dealedAsEmpty?: any[]): boolean;
export declare function createFormElementFromInput(input: WizardInput): TemplateResult;
export declare function createFormElementsFromInputs(inputs: WizardInput[]): TemplateResult[];
export declare function createFormDivider(header?: string): TemplateResult;
export declare function editServicesWizard(services: Element): Wizard;
