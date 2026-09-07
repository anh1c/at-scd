import { TemplateResult } from 'lit-element';
import { Wizard } from '@compas-oscd/open-scd/dist/foundation.js';
interface ContentOptions {
    name: string | null;
    desc: string | null;
    type: string | null;
    reservedNames: string[];
}
export declare function contentFunctionWizard(content: ContentOptions): TemplateResult[];
export declare function editFunctionWizard(element: Element): Wizard;
export declare function createFunctionWizard(parent: Element): Wizard;
export {};
