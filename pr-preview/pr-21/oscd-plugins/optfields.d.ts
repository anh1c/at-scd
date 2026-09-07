import { TemplateResult } from 'lit-element';
import '@material/mwc-list/mwc-list-item';
import '@compas-oscd/open-scd/dist/wizard-checkbox.js';
import '@compas-oscd/open-scd/dist/wizard-select.js';
import { Wizard } from '@compas-oscd/open-scd/dist/foundation.js';
interface ContentOptions {
    seqNum: string | null;
    timeStamp: string | null;
    dataSet: string | null;
    reasonCode: string | null;
    dataRef: string | null;
    entryID: string | null;
    configRef: string | null;
    bufOvfl: string | null;
}
export declare function contentOptFieldsWizard(option: ContentOptions): TemplateResult[];
export declare function editOptFieldsWizard(element: Element): Wizard;
export {};
