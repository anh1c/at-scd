import { TemplateResult } from 'lit-element';
import '@material/mwc-list';
import '@material/mwc-list/mwc-list-item';
import '@compas-oscd/open-scd/dist/wizard-textfield.js';
import { Wizard } from '@compas-oscd/open-scd/dist/foundation.js';
export declare function renderLdeviceWizard(ldName: string | null, readOnly: boolean, desc: string | null, inst: string | null, reservedInst: string[]): TemplateResult[];
export declare function editLDeviceWizard(element: Element): Wizard;
