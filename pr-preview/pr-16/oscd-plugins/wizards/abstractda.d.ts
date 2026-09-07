import { TemplateResult } from 'lit-html';
import '@material/mwc-list/mwc-list-item';
import '@compas-oscd/open-scd/dist/wizard-checkbox.js';
import '@compas-oscd/open-scd/dist/wizard-select.js';
import '@compas-oscd/open-scd/dist/wizard-textfield.js';
import { EditorAction } from '@compas-oscd/core';
export declare function wizardContent(name: string | null, desc: string | null, bType: string, types: Element[], type: string | null, sAddr: string | null, valKind: string | null, valImport: string | null, Val: string | null, data: Element): TemplateResult[];
export declare function getValAction(oldVal: Element | null, Val: string | null, abstractda: Element): EditorAction;
