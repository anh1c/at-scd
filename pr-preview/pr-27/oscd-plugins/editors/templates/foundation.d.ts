import '@material/mwc-list/mwc-list-item';
import { Create } from '@compas-oscd/core';
export interface UpdateOptions {
    identity: string | null;
    doc: XMLDocument;
}
export interface CreateOptions {
    parent: Element;
}
export type WizardOptions = UpdateOptions | CreateOptions;
export declare const allDataTypeSelector = "LNodeType, DOType, DAType, EnumType";
export declare function isCreateOptions(options: WizardOptions): options is CreateOptions;
export declare function unifyCreateActionArray(actions: Create[]): Create[];
export declare function addReferencedDataTypes(element: Element, parent: Element): Create[];
/** Common `CSS` styles used by DataTypeTemplate subeditors */
export declare const styles: import("lit-element").CSSResult;
