import { TemplateResult } from 'lit-element';
import '@material/mwc-button';
import '@material/mwc-list/mwc-list-item';
import '@compas-oscd/open-scd/dist/filtered-list.js';
import '@compas-oscd/open-scd/dist/wizard-checkbox.js';
import '@compas-oscd/open-scd/dist/wizard-select.js';
import '@compas-oscd/open-scd/dist/wizard-textfield.js';
import { Wizard, WizardActor, WizardMenuActor } from '@compas-oscd/open-scd/dist/foundation.js';
import { ComplexAction } from '@compas-oscd/core';
interface ContentOptions {
    name: string | null;
    desc: string | null;
    type: string | null;
    appID: string | null;
    fixedOffs: string | null;
    securityEnabled: string | null;
}
export declare function getGSE(element: Element): Element | null | undefined;
export declare function contentGseControlWizard(content: ContentOptions): TemplateResult[];
export declare function createGseControlWizard(ln0OrLn: Element): Wizard;
export declare function gseControlParentSelector(doc: XMLDocument): Wizard;
export declare function removeGseControlAction(element: Element): ComplexAction | null;
export declare function removeGseControl(element: Element): WizardMenuActor;
export declare function updateGseControlAction(element: Element): WizardActor;
export declare function editGseControlWizard(element: Element): Wizard;
export declare function selectGseControlWizard(element: Element): Wizard;
export {};
