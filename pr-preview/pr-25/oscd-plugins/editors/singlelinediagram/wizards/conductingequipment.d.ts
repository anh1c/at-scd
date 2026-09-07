import { TemplateResult } from 'lit-element';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-select';
import '@compas-oscd/open-scd/dist/wizard-textfield.js';
import { Wizard } from '@compas-oscd/open-scd/dist/foundation.js';
export declare function render(name: string | null, desc: string | null, xCoordinate: string | null, yCoordinate: string | null, option: 'edit' | 'create', type: string, reservedNames: string[]): TemplateResult[];
export declare function editConductingEquipmentWizard(element: Element): Wizard;
