import { LitElement } from 'lit-element';
import { LogDetail, LogDetailBase } from '@compas-oscd/core';
type ValidationResult = LogDetailBase | LogDetail;
export default class ValidateTemplates extends LitElement {
    doc: XMLDocument;
    docName: string;
    pluginId: string;
    dispatch(detail: ValidationResult): void;
    validate(): Promise<void>;
}
export {};
