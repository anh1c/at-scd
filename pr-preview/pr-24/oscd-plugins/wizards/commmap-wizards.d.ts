import '@material/mwc-icon';
import '@material/mwc-list/mwc-list-item';
import '@compas-oscd/open-scd/dist/filtered-list.js';
import { Wizard, WizardActor } from '@compas-oscd/open-scd/dist/foundation.js';
export declare function openCommunicationMappingWizard(root: XMLDocument | Element): WizardActor;
export declare function getSinkReferences(root: Document | Element): Element[];
export declare function getSourceReferences(root: Document | Element): Element[];
export declare function communicationMappingWizard(element: XMLDocument | Element): Wizard;
