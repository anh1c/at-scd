import { TemplateResult } from 'lit-element';
import './function-editor.js';
import '@compas-oscd/open-scd/dist/icons/icons.components.js';
import { BayEditor } from './bay-editor.js';
import { VoltageLevelEditor } from './voltage-level-editor.js';
import { SubstationEditor } from './substation-editor.js';
export declare function attachedIeds(element: Element, remainingIeds: Set<Element>): Element[];
export declare function getAttachedIeds(doc: XMLDocument): (element: Element) => Element[];
/**
 * Clones - deep copy - substation element cloneEntity with removed single line diagram
 * @param cloneEntity - substation element to be cloned
 * @param newName - name of the clone
 * @param iedRedirect - redirection information for LNode elements (all LNodes's are removed for undefined)
 * @returns a deep cloned node without single line diagram information
 */
export declare function substationElementClone(cloneEntity: Element, newName: string, iedRedirect?: Partial<Record<string, string>>): Element;
/** Function that returns unique name for a given element tag within parent scope
 * With given namesake the structure of the name of the namesake is use
 * @param parent - parent element that is the scope of name uniqueness
 * @param tagName - the element tag for which the name shall be unique
 * @param namesake - for predefined name structure
 */
export declare function uniqueSubstationElementName(parent: Element, tagName: string, namesake?: string): string;
/** A dialog that allows users of substation element clone function to add some configuration */
export declare function redirectDialog(cloneEntity: Element): TemplateResult;
export declare function someAvailableRedirection(cloneEntity: Element): boolean;
export declare function cloneSubstationElement(editor: BayEditor | VoltageLevelEditor | SubstationEditor): Promise<void>;
export type ElementEditor = Element & {
    element: Element;
};
export type ElementEditorClass<T extends ElementEditor> = new () => T;
/**
 * Moves the element edited by `editor` to the place before the next `Child`
 * editor selected or to the end of the next `Parent` editor selected by mouse
 * click or keyboard (space or enter key).
 *
 * The move action can be aborted by clicking on something other than a `Child`
 * or `Parent` editor or by hitting the escape key on the keyboard.
 */
export declare function startMove<E extends ElementEditor, C extends ElementEditorClass<ElementEditor>, P extends ElementEditorClass<ElementEditor>>(editor: E, childClass: C, parentClasses: P[]): void;
/**
 * Get the correct icon for a specific Conducting Equipment.
 * @param condEq - The Conducting Equipment to search the icon for.
 * @returns The icon.
 */
export declare function getIcon(condEq: Element): TemplateResult;
/**
 * Creates a general-equipment template literal.
 * FIXME(ca-d): this cannot update since it is not a LitElement instance method.
 * @param doc - Project xml document.
 * @param element - scl general-equipment element.
 * @param showfunctions - Whether rendered as action pane (true).
 * @returns - template literal.
 */
export declare function renderGeneralEquipment(doc: XMLDocument, element: Element, showfunctions: boolean): TemplateResult;
export type SubstationTag = 'Substation' | 'VoltageLevel' | 'Bay' | 'ConductingEquipment';
/** `Private`-safeguarded selectors for `Substation` and its descendants */
export declare const selectors: Record<SubstationTag, string>;
/** Common `CSS` styles used by substation subeditors */
export declare const styles: import("lit-element").CSSResult;
