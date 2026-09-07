import '@material/mwc-button';
import '@material/mwc-list';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-select';
import '@compas-oscd/open-scd/dist/wizard-textfield.js';
import { Wizard } from '@compas-oscd/open-scd/dist/foundation.js';
export declare function createEnumTypeWizard(parent: Element, templates: Document): Wizard;
export declare function eNumTypeEditWizard(eNumTypeIdentity: string, doc: XMLDocument): Wizard | undefined;
