import { TemplateResult } from 'lit-html';
import { Wizard } from '@compas-oscd/open-scd/dist/foundation.js';
import '@compas-oscd/open-scd/dist/wizard-textfield.js';
import '@compas-oscd/open-scd/dist/wizard-select.js';
interface ContentOptions {
    name: string | null;
    desc: string | null;
    phase: string | null;
    virtual: string | null;
    reservedNames: string[];
}
export declare function contentSubEquipmentWizard(content: ContentOptions): TemplateResult[];
export declare function editSubEquipmentWizard(element: Element): Wizard;
export declare function createSubEquipmentWizard(parent: Element): Wizard;
export {};
