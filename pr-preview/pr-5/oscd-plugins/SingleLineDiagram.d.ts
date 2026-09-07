import { LitElement, PropertyValues, TemplateResult } from 'lit-element';
import { SingleSelectedEvent } from '@material/mwc-list/mwc-list-foundation';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-select';
import '@material/mwc-textfield';
/**
 * Main class plugin for Single Line Diagram editor.
 */
export default class SingleLineDiagramPlugin extends LitElement {
    doc: XMLDocument;
    panzoomContainer: HTMLElement;
    svg: SVGGraphicsElement;
    private get substations();
    private set selectedSubstation(value);
    private get selectedSubstation();
    /**
     * Get all the Power Transformers from an element.
     */
    private getPowerTransformers;
    /**
     * Get all the Voltage Levels from the substation.
     */
    private getVoltageLevels;
    /**
     * Get all the BusBars from the voltage level.
     */
    private getBusBars;
    /**
     * Get all the bays from the voltage level.
     */
    private getBays;
    /**
     * Get all the Conducting Equipment from a Bay.
     * @param bayElement - The Bay to search in.
     */
    private getConductingEquipments;
    /**
     * Get all the Connectivity Nodes from a Bay/Busbar.
     * @param bayElement - The Bay/Busbar to search in.
     */
    private getConnectivityNode;
    /**
     * Search for Equipment (ConductionEquipment or PowerTransformer) which has a terminal wth a connectivityNode
     * tha is the same as the passed pathName.
     * @param parentElement - The Element to search in for Equipment.
     * @param pathName      - The PathName to search for in the Terminal.
     */
    private findEquipment;
    /**
     * Draw all equipment and connections of the selected Substation.
     */
    private drawSubstation;
    /**
     * Draw all available `PowerTransformer`s of passed parent element.
     * Should only be a <g> element.
     * @param parentElement - The parent element to search for PowerTransformers.
     * @param parentGroup   - The SVG Group to which to add the PowerTransformer.
     */
    private drawPowerTransformers;
    /**
     * Draw an SVG from the passed PowerTransformer Element.
     * Should only be a <g> element.
     * @param parentGroup             - The SVG Group to which to add the PowerTransformer.
     * @param powerTransformerElement - The PowerTransformer to draw.
     */
    private drawPowerTransformer;
    /**
     * Draw all available Voltage Levels of the passed Substation Element.
     * Should only be a <g> element.
     *  @param substationElement - The substation containing the voltage levels.
     *  @param substationGroup   - The group to which to add the SVGs.
     */
    private drawVoltageLevels;
    /**
     * Draw all available Bays of the passed Voltage Level Element.
     * Should only be a <g> element.
     * @param voltageLevelElement - The Voltage Level containing the bays.
     * @param voltageLevelGroup   - The group to which to add the SVGs.
     * */
    private drawBays;
    /**
     * Draw all available Conducting Equipments of the passed Bay Element.
     * Should only be a <g> element.
     * @param bayElement - The Bay containing the Conducting Equipment.
     * @param bayGroup   - The group to which to add the SVGs.
     */
    private drawConductingEquipments;
    /**
     * Draw all available Connectivity Nodes of the passed Bay Element.
     * @param bayElement - The Bay containing the Connectivity Nodes.
     * @param bayGroup   - The group to which to add the SVGs.
     * */
    private drawConnectivityNodes;
    /**
     * Draw all connections between the different Equipment in the Bay and the Bay has with other Equipment outside
     * the bay.
     * @param rootElement - The Element containing all the other elements to which the Bay is connected.
     * @param rootGroup   - The SVG Element that contains all groups from the elements to add path to.
     * @param bayElement  - The Bay that holds the Connectivity Node to connect with.
     */
    private drawBayConnections;
    /**
     * Draw all available Busbars of the passed Voltage Level Element.
     * @param voltageLevelElement - The Voltage Level containing the Busbars.
     * @param voltageLevelGroup   - The group to which to add the SVGs.
     */
    private drawBusBars;
    /**
     * Draw all the connections a Busbar has with other Equipment.
     * @param rootElement   - The Element containing all the other elements to which the Busbar is connected.
     * @param rootGroup     - The SVG Element that contains all groups from the elements to add path to.
     * @param busbarElement - The Busbar that holds the Connectivity Node to connect with.
     */
    private drawBusBarConnections;
    /**
     * Remove all the child elements (and descendants) from the SVG Element, to have a clean start.
     */
    private clearSVG;
    /**
     * Draw all the elements of the selected Substation.
     */
    drawSVGElements(): void;
    /**
     * Open an Edit wizard for an element.
     * @param element - The element to show the wizard for.
     */
    openEditWizard(event: Event, element: Element): void;
    protected updated(_changedProperties: PropertyValues): void;
    onSelect(event: SingleSelectedEvent): void;
    private renderSubstationSelector;
    render(): TemplateResult;
    static styles: import("lit-element").CSSResult;
}
