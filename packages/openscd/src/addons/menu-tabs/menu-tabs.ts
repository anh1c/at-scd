import {
  customElement,
  html,
  LitElement,
  property,
  query,
  state,
  TemplateResult,
  css
} from 'lit-element';

import '@material/mwc-list';
import '@material/mwc-tab';
import '@material/mwc-tab-bar';
import '@material/mwc-button';

import {
  Plugin,
} from "../../plugin.js"


@customElement('oscd-menu-tabs')
export class OscdMenuTabs extends LitElement {

  @property({ type: Array }) editors: Plugin[] = [];
  _activeEditor: Plugin | undefined;
  @property({ type: Object }) get activeEditor() { return this._activeEditor; }
  set activeEditor(editor: Plugin | undefined) {
    this._activeEditor = editor;
    const editorIndex = this.editors.findIndex(e => e.name === editor?.name && e.src === editor?.src);
    this.activeTabIndex = editorIndex > -1 ? editorIndex : 0;
    this.requestUpdate();
  };

  @state() private activeTabIndex = 0;

  render(){
    if(this.editors.length === 0){ return html``; }

    return html`
      <mwc-tab-bar
        @MDCTabBar:activated=${this.handleActivatedEditorTab}
        activeIndex=${this.activeTabIndex}
      >
        ${ this.editors.map( EditorTab ) }
      </mwc-tab-bar>
    `
  }

  static styles = css`
    :host {
      display: block;
      background: var(--oscd-base2);
      border-bottom: 1px solid #e2e8f0;
      padding: 0 8px;
    }

    mwc-tab {
      background-color: var(--oscd-base3);
      --mdc-theme-primary: #1d4ed8;
      --mdc-tab-text-label-color-default: var(--oscd-base00);
      --mdc-tab-text-label-color-active: #1d4ed8;
      --mdc-tab-indicator-active-indicator-color: #1d4ed8;
      border-radius: 4px 4px 0 0;
    }
  `

  private handleActivatedEditorTab(e: CustomEvent): void {
    const tabIndex = e.detail.index;
    const editor = this.editors[tabIndex];
    this.activeTabIndex = tabIndex;
    this.dispatchActivateEditor(editor);
  }

  private dispatchActivateEditor( editor: Plugin ){
    const newEvent = new CustomEvent(TabActivatedEventKey, {
      detail: { editor },
      composed: true,
      bubbles: true
    })
    this.dispatchEvent(newEvent)
  }
}

function EditorTab({ name, icon }: Plugin): TemplateResult {
  return html`
    <mwc-tab label=${name} icon=${icon || 'edit'}> </mwc-tab>
  `;
}

export const TabActivatedEventKey = 'oscd-editor-tab-activated'
export type TabActivatedEvent = CustomEvent<TabActivatedEventDetail>;
export type TabActivatedEventDetail = { editor: Plugin }
