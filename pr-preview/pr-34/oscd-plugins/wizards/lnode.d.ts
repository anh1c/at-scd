import '@material/mwc-icon';
import '@material/mwc-list/mwc-check-list-item';
import '@material/mwc-list/mwc-list-item';
import '@compas-oscd/open-scd/dist/filtered-list.js';
import { Wizard, WizardActor } from '@compas-oscd/open-scd/dist/foundation.js';
/** Queries `parent` for an `LNode` described by logical node element. */
export declare function getLNode(parent: Element | XMLDocument, anyln: Element): Element | null;
/**
 * @returns a `WizardAction` updating `parent`'s `LNodes`
 * to the entries selected in `wizard`'s `#lnList`.
 */
export declare function lNodeWizardAction(parent: Element): WizardActor;
/** @returns a Wizard for editing `element`'s `LNode` children. */
export declare function lNodeWizard(parent: Element): Wizard;
export declare function editLNodeWizard(element: Element): Wizard;
