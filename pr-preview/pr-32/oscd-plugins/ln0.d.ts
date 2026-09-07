import { TemplateResult } from 'lit-element';
import '@material/mwc-list/mwc-list-item';
import '@compas-oscd/open-scd/dist/wizard-textfield.js';
import '@compas-oscd/open-scd/dist/wizard-select.js';
import { Wizard } from '@compas-oscd/open-scd/dist/foundation.js';
export declare function renderLN0Wizard(lnodeTypeIds: string[], lnType: string | null, desc: string | null, lnClass: string | null, inst: string | null): TemplateResult[];
export declare function editLN0Wizard(element: Element): Wizard;
