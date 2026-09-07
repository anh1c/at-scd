import { TemplateResult } from 'lit-element';
import '@compas-oscd/open-scd/dist/wizard-textfield.js';
import { Wizard } from '@compas-oscd/open-scd/dist/foundation.js';
export declare function renderLNWizard(lnType: string | null, desc: string | null, prefix: string | null, lnClass: string | null, inst: string | null, reservedInst: string[]): TemplateResult[];
export declare function editLNWizard(element: Element): Wizard;
