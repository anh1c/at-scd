import '@omicronenergy/oscd-ui/checkbox/oscd-checkbox.js';
import '@omicronenergy/oscd-ui/switch/oscd-switch.js';
import '@omicronenergy/oscd-ui/list/oscd-list-item.js';
import '@material/mwc-list/mwc-check-list-item';
import '@omicronenergy/oscd-ui/icon/oscd-icon.js';
import '@compas-oscd/open-scd/dist/wizard-textfield.js';
import '@compas-oscd/open-scd/dist/filtered-list.js';
import { Wizard } from '@compas-oscd/open-scd/dist/foundation.js';
/** @returns single page  [[`Wizard`]] for creating SCL element ConnectedAP. */
export declare function createConnectedApWizard(element: Element): Wizard;
/** @returns single page [[`Wizard`]] to edit SCL element ConnectedAP for the 104 plugin. */
export declare function editConnectedApWizard(parent: Element, redundancy?: boolean): Wizard;
