import { LitElement, PropertyValues, TemplateResult } from 'lit-element';
import '@material/mwc-icon';
import '@material/mwc-list';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-list/mwc-check-list-item';
import '@material/mwc-menu';
import '@material/mwc-icon-button';
import { Icon } from '@material/mwc-icon';
import { List } from '@material/mwc-list';
import { Menu } from '@material/mwc-menu';
import '@compas-oscd/open-scd/dist/icons/icons.components.js';
type controlTag = 'SampledValueControl' | 'GSEControl';
/**
 * A sub element for showing all Goose/Sampled Value Controls.
 * A control can be edited using the standard wizard.
 * And when selecting a FCDA Element a custom event is fired, so other list can be updated.
 */
export declare class FcdaBindingList extends LitElement {
    doc: XMLDocument;
    editCount: number;
    controlTag: controlTag;
    includeLaterBinding: boolean;
    private selectedControlElement;
    private selectedFcdaElement;
    private extRefCounters;
    get hideSubscribed(): boolean;
    set hideSubscribed(value: boolean);
    get hideNotSubscribed(): boolean;
    set hideNotSubscribed(value: boolean);
    actionsMenu: Menu;
    actionsMenuIcon: Icon;
    controlBlockList: List;
    private iconControlLookup;
    constructor();
    private getControlElements;
    private getFcdaElements;
    private resetExtRefCount;
    private getExtRefCount;
    private openEditWizard;
    private resetSelection;
    private onFcdaSelect;
    protected updated(_changedProperties: PropertyValues): void;
    renderFCDA(controlElement: Element, fcdaElement: Element): TemplateResult;
    updateBaseFilterState(): void;
    protected firstUpdated(): void;
    renderTitle(): TemplateResult;
    renderControls(controlElements: Element[]): TemplateResult;
    render(): TemplateResult;
    static styles: import("lit-element").CSSResult;
}
export {};
