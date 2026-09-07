import { LitElement } from 'lit-element';
import '@material/mwc-list/mwc-check-list-item';
import '@compas-oscd/open-scd/dist/filtered-list.js';
/** Plug-in that enriched ExtRefs desc attribute based on intAddr attribute (ABB)*/
export default class UpdateDescriptionAbb extends LitElement {
    /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
    doc: XMLDocument;
    /** Entry point for this plug-in */
    run(): Promise<void>;
}
