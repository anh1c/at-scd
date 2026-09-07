import '@material/mwc-button';
import '@material/mwc-list';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-select';
import '@compas-oscd/open-scd/dist/wizard-textfield.js';
import { Wizard } from '@compas-oscd/open-scd/dist/foundation.js';
export declare function editDaTypeWizard(dATypeIdentity: string, doc: XMLDocument): Wizard | undefined;
export declare function createDATypeWizard(parent: Element, templates: Document): Wizard;
