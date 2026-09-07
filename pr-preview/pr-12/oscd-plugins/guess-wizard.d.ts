import '@material/mwc-list';
import '@material/mwc-list/mwc-check-list-item';
import { Wizard } from '@compas-oscd/open-scd/dist/foundation.js';
/** @returns a Wizard for guessing `VoltageLevel` stucture assuming each
 * `LN[lnClass="CSWI"]` represents a bay controller */
export declare function guessVoltageLevel(doc: XMLDocument, substation: Element): Wizard;
