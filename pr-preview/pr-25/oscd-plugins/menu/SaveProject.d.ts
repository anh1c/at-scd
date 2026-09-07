import { LitElement } from 'lit-element';
export default class SaveProjectPlugin extends LitElement {
    doc: XMLDocument;
    docName: string;
    run(): Promise<void>;
}
