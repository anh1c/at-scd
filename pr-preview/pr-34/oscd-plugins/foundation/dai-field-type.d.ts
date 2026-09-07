import { TemplateResult } from 'lit-html';
import '@material/mwc-list/mwc-list-item';
import '@compas-oscd/open-scd/dist/wizard-textfield.js';
import '@compas-oscd/open-scd/dist/wizard-select.js';
import { WizardInputElement } from '@compas-oscd/open-scd/dist/foundation.js';
export interface CustomField {
    render(element: Element, instanceElement?: Element, numOfSGs?: number | null): TemplateResult[];
    value(inputs: WizardInputElement[], sGroup?: number | null): string | null;
}
declare const daiFieldTypes: readonly ["BOOLEAN", "Enum", "FLOAT32", "FLOAT64", "INT8", "INT16", "INT24", "INT32", "INT64", "INT128", "INT8U", "INT16U", "INT24U", "INT32U", "Timestamp", "VisString32", "VisString64", "VisString65", "VisString129", "VisString255", "ObjRef", "Currency", "Octet64", "Octet6", "Octet16"];
export type DaiFieldTypes = (typeof daiFieldTypes)[number];
export declare function getCustomField(): Record<DaiFieldTypes, CustomField>;
export declare function getDateValueFromTimestamp(value: string): string | null;
export declare function getTimeValueFromTimestamp(value: string): string | null;
export {};
