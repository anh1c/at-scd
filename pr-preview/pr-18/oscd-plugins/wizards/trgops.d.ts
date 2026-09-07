import { TemplateResult } from 'lit-element';
import '@material/mwc-list/mwc-list-item';
import '@compas-oscd/open-scd/dist/wizard-checkbox.js';
import '@compas-oscd/open-scd/dist/wizard-select.js';
import { Wizard } from '@compas-oscd/open-scd/dist/foundation.js';
interface ContentOptions {
    dchg: string | null;
    qchg: string | null;
    dupd: string | null;
    period: string | null;
    gi: string | null;
}
export declare function contentTrgOpsWizard(option: ContentOptions): TemplateResult[];
export declare function editTrgOpsWizard(element: Element): Wizard;
export {};
