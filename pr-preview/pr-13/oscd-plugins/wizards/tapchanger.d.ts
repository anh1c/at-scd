import { TemplateResult } from 'lit-element';
import { Wizard } from '@compas-oscd/open-scd/dist/foundation.js';
interface ContentOptions {
    name: string | null;
    desc: string | null;
    type: string | null;
    virtual: string | null;
    reservedNames: string[];
}
export declare function contentTapChangerWizard(content: ContentOptions): TemplateResult[];
export declare function createTapChangerWizard(parent: Element): Wizard;
export declare function editTapChangerWizard(element: Element): Wizard;
export {};
