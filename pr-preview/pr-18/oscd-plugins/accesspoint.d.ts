import { TemplateResult } from 'lit-element';
import '@compas-oscd/open-scd/dist/wizard-textfield.js';
import { Wizard, WizardActor } from '@compas-oscd/open-scd/dist/foundation.js';
export declare function renderAccessPointWizard(name: string | null, desc: string | null, reservedNames: string[]): TemplateResult[];
export declare function removeAccessPointWizard(element: Element): Wizard | null;
export declare function editAccessPointWizard(element: Element): Wizard;
export declare function removeAccessPointAndReferences(element: Element): WizardActor;
