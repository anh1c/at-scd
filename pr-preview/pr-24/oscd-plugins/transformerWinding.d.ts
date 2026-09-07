import { TemplateResult } from 'lit-element';
import { Wizard } from '@compas-oscd/open-scd/dist/foundation.js';
export declare function createTransformerWindingWizard(parent: Element): Wizard;
interface ContentOptions {
    name: string | null;
    desc: string | null;
    type: string | null;
    virtual: string | null;
    reservedNames: string[];
}
export declare function contentTransformerWindingWizard(content: ContentOptions): TemplateResult[];
export declare function editTransformerWindingWizard(element: Element): Wizard;
export {};
