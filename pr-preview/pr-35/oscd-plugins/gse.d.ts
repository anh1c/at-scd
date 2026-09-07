import '@compas-oscd/open-scd/dist/wizard-textfield.js';
import { Wizard, WizardActor } from '@compas-oscd/open-scd/dist/foundation.js';
import { SimpleAction } from '@compas-oscd/core';
export declare function getMTimeAction(type: 'MinTime' | 'MaxTime', oldTime: Element | null, Time: string | null, gse: Element): SimpleAction;
export declare function updateGSEAction(element: Element): WizardActor;
export declare function editGseWizard(element: Element): Wizard;
