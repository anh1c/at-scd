import { LitElement } from 'lit-element';
/**
 * Take an XMLDocument and pretty-print, format it, attach it to a document link and then download it.
 * @param doc - The XML document
 * @param document - The element to attach to within the DOM
 * @param filename - The filename to produce
 * @returns The blob object that is serialised
 */
export declare function saveXmlBlob(doc: XMLDocument, document: Document, filename: string): void;
/**
 * Plug-in to allow exporting of the Communication SCL element as an XML file.
 */
export default class ExportCommunication extends LitElement {
    /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
    doc: XMLDocument;
    editCount: number;
    docName: string;
    /** Entry point for this plug-in */
    run(): Promise<void>;
}
