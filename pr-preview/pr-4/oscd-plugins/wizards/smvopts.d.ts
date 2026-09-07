import { TemplateResult } from 'lit-element';
import { Wizard } from '@compas-oscd/open-scd/dist/foundation.js';
interface ContentOptions {
    refreshTime: string | null;
    sampleRate: string | null;
    dataSet: string | null;
    security: string | null;
    synchSourceId: string | null;
}
export declare function contentSmvOptsWizard(option: ContentOptions): TemplateResult[];
export declare function editSmvOptsWizard(element: Element): Wizard;
export {};
