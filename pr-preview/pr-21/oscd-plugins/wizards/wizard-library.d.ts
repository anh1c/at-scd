import { SCLTag, Wizard } from '@compas-oscd/open-scd/dist/foundation.js';
type SclElementWizard = (element: Element) => Wizard | undefined;
export declare const wizards: Record<SCLTag, {
    edit: SclElementWizard;
    create: SclElementWizard;
}>;
export {};
