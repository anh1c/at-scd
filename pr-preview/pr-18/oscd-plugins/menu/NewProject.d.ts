import { LitElement } from 'lit-element';
import '@material/mwc-list';
import '@material/mwc-list/mwc-radio-list-item';
import '@compas-oscd/open-scd/dist/wizard-textfield.js';
export default class NewProjectPlugin extends LitElement {
    private createNewProject;
    private newProjectWizard;
    run(): Promise<void>;
}
