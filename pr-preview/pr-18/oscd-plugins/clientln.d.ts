import '@material/mwc-list/mwc-check-list-item';
import '@material/mwc-icon';
import '@compas-oscd/open-scd/dist/filtered-list.js';
import { Wizard } from '@compas-oscd/open-scd/dist/foundation.js';
export declare function createClientLnWizard(sourceIEDs: Element[], sinkIED: Element): Wizard;
export declare function selectClientLNsWizard(clientLns: Element[], root: XMLDocument | Element): Wizard;
