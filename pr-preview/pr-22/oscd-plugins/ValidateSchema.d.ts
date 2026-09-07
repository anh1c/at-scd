import { LitElement } from 'lit-element';
export default class ValidateSchema extends LitElement {
    doc: XMLDocument;
    docName: string;
    pluginId: string;
    private getValidator;
    validate(): Promise<void>;
}
