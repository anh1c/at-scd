import { LitElement } from 'lit-element';
import '@material/mwc-icon';
import '@compas-oscd/open-scd/dist/finder-list.js';
import { Wizard } from '@compas-oscd/open-scd/dist/foundation.js';
export declare function aboutBoxWizard(): Wizard;
export default class HelpPlugin extends LitElement {
    run(): Promise<void>;
}
