import { TemplateResult } from 'lit-element';
import '@omicronenergy/oscd-ui/textfield/oscd-filled-text-field.js';
import { Wizard, WizardMenuActor } from '@compas-oscd/open-scd/dist/foundation.js';
import '@compas-oscd/open-scd/dist/wizard-textfield.js';
export declare function renderDOIWizard(doiElement: Element): TemplateResult[];
export declare function remove104Private(doiElement: Element): WizardMenuActor;
export declare function showDOIInfoWizard(doiElement: Element): Wizard;
