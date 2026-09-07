import { TemplateResult } from 'lit-element';
import { Wizard } from '@compas-oscd/open-scd/dist/foundation.js';
interface ContentOptions {
    name: string | null;
    desc: string | null;
    type: string | null;
    reservedNames: string[];
}
export declare function contentProcessWizard(content: ContentOptions): TemplateResult[];
export declare function createProcessWizard(parent: Element): Wizard;
export declare function editProcessWizard(element: Element): Wizard;
export {};
