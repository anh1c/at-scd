import { expect, fixture, html } from '@open-wc/testing';

import '@compas-oscd/open-scd/dist/test-helper';
import '../../../src/editors/IED.js';

import {
  initializeNsdoc,
  Nsdoc,
} from '@compas-oscd/open-scd/dist/foundation/nsdoc.js';
import IED from '../../../src/editors/IED.js';
import { MockOpenSCD } from '@compas-oscd/open-scd/dist/test-helper';
import { OscdApi } from '@compas-oscd/core';

describe('IED Plugin', () => {
  if (customElements.get('ied-plugin') === undefined)
    customElements.define('ied-plugin', IED);
  let element: IED;
  let parent: MockOpenSCD;
  let nsdoc: Nsdoc;

  describe('without a doc loaded', () => {
    beforeEach(async () => {
      parent = await fixture(
        html`<mock-open-scd><ied-plugin></ied-plugin></mock-open-scd>`
      );
      element = parent.getActivePlugin();
      await element.requestUpdate();
      await element.updateComplete;
    });

    it('looks like the latest snapshot', async () => {
      await expect(element).shadowDom.to.equalSnapshot();
    });
  });

  describe('with a doc loaded', () => {
    let doc: XMLDocument;
    let oscdApi: OscdApi;

    describe('containing no IEDs', () => {
      beforeEach(async () => {
        doc = await fetch('/test/testfiles/editors/iedEditorWithoutIEDs.scd')
          .then(response => response.text())
          .then(str => new DOMParser().parseFromString(str, 'application/xml'));
        nsdoc = await initializeNsdoc();
        parent = await fixture(
          html`<mock-open-scd
            ><ied-plugin .doc="${doc}" .nsdoc="${nsdoc}"></ied-plugin
          ></mock-open-scd>`
        );
        element = parent.getActivePlugin();
        await element.requestUpdate();
        await element.updateComplete;
      });

      it('looks like the latest snapshot', async () => {
        await expect(element).shadowDom.to.equalSnapshot();
      });
    });

    describe('Open Services Wizard', () => {
      beforeEach(async () => {
        doc = await fetch('/test/testfiles/Services.scd')
          .then(response => response.text())
          .then(str => new DOMParser().parseFromString(str, 'application/xml'));

        nsdoc = await initializeNsdoc();

        parent = await fixture(
          html`<mock-open-scd
            ><ied-plugin .doc=${doc} .nsdoc=${nsdoc}></ied-plugin
          ></mock-open-scd>`
        );
        element = parent.getActivePlugin();

        await element.requestUpdate();
        await element.updateComplete;

        await selectIed('WithServices');
        await new Promise(resolve => setTimeout(resolve, 100)); // await animation
      });

      it('opens the Services wizard from the hierarchy row', async () => {
        element
          .shadowRoot!.querySelector<HTMLElement>(
            '.tree-actions mwc-icon-button[icon="settings"]'
          )!
          .click();

        await element.requestUpdate();

        expect(parent.wizardUI).to.exist;
      });
    });

    describe('containing IEDs', () => {
      beforeEach(async () => {
        doc = await fetch('/test/testfiles/editors/iedEditorWithIEDs.scd')
          .then(response => response.text())
          .then(str => new DOMParser().parseFromString(str, 'application/xml'));
        nsdoc = await initializeNsdoc();
        oscdApi = new OscdApi('IED');
        oscdApi.pluginState.setState(null);
        parent = await fixture(
          html`<mock-open-scd
            ><ied-plugin
              .doc="${doc}"
              .nsdoc="${nsdoc}"
              .oscdApi=${oscdApi}
            ></ied-plugin
          ></mock-open-scd>`
        );
        element = parent.getActivePlugin();
        await element.requestUpdate();
        await element.updateComplete;
      });

      it('shows selected hierarchy descendants with table toggles', async () => {
        const tags = () =>
          Array.from(
            element.shadowRoot!.querySelectorAll<HTMLTableRowElement>(
              'tbody tr[data-tag]'
            )
          ).map(row => row.dataset.tag);

        element.shadowRoot!.querySelector<HTMLButtonElement>('.tree-node')!.click();
        await element.updateComplete;

        expect(tags()).to.deep.equal(['AccessPoint']);
        expect(
          element.shadowRoot!.querySelector('.table-toggle')
        ).to.exist;
      });

      it('shows template data-model children in the hierarchy', async () => {
        await selectIed('IED2');

        const hasPhyNam = () =>
          Array.from(
            element.shadowRoot!.querySelectorAll<HTMLButtonElement>(
              '.tree-node'
            )
          ).some(button => button.textContent!.trim() === 'PhyNam');

        expect(hasPhyNam()).to.be.false;
        for (let i = 0; i < 20 && !hasPhyNam(); i++) {
          element
            .shadowRoot!.querySelector<HTMLButtonElement>(
              '.tree-toggle:not([aria-label^="Collapse"])'
            )!
            .click();
          await element.updateComplete;
        }
        expect(hasPhyNam()).to.be.true;
      });

      describe('load and store selected IEDs', () => {
        it('should store selected IEDs on disconnected', async () => {
          await selectIed('IED3');
          element.disconnectedCallback();

          const api = new OscdApi('IED');
          expect(api.pluginState.getState()).to.deep.equal({
            selectedIEDs: ['IED3'],
          });
        });
      });

      describe('with stored plugin state', () => {
        beforeEach(() => {
          oscdApi.pluginState.setState({ selectedIEDs: ['IED3'] });
        });

        it('should load previously saved IED', () => {
          element.connectedCallback();

          expect(element.selectedIEDs).to.deep.equal(['IED3']);
        });
      });

      describe('virtual IED creation', () => {
        it('should render create IED button', () => {
          const createButton =
            element.shadowRoot!.querySelector('.add-ied-button');
          expect(createButton).to.exist;
          expect(createButton!.textContent).to.include('Create Virtual IED');
        });

        it('should show create IED dialog when button is clicked', async () => {
          const createButton = element.shadowRoot!.querySelector(
            '.add-ied-button'
          ) as HTMLElement;
          const dialog =
            element.shadowRoot!.querySelector('create-ied-dialog')!;

          let dialogShowCalled = false;
          (dialog as any).show = () => {
            dialogShowCalled = true;
          };

          createButton.click();
          await element.updateComplete;

          expect(dialogShowCalled).to.be.true;
        });

        it('should create virtual IED when confirmed through dialog', async () => {
          let editEventDetail: any = null;
          element.addEventListener('oscd-edit-v2', (event: Event) => {
            editEventDetail = (event as CustomEvent).detail;
          });

          const dialog = element.shadowRoot!.querySelector(
            'create-ied-dialog'
          ) as any;

          const onConfirm = dialog.onConfirm;
          onConfirm('TestVirtualIED');

          await element.updateComplete;

          expect(editEventDetail).to.exist;
          expect(editEventDetail.edit).to.be.an('array');
          expect(editEventDetail.edit.length).to.be.greaterThan(0);

          expect(element.selectedIEDs).to.deep.equal(['TestVirtualIED']);
          expect(element.selectedLNClasses).to.deep.equal([]);
        });
      });
    });
  });

  async function selectIed(name: string): Promise<void> {
    const oscdFilterButton = element.shadowRoot!.querySelector(
      'oscd-filter-button[id="iedFilter"]'
    );
    const filterButton = <HTMLElement>(
      oscdFilterButton!.shadowRoot!.querySelector('mwc-icon-button')
    );
    filterButton.click();
    await element.updateComplete;

    const selectItem = <HTMLElement>(
      oscdFilterButton!.querySelector(`mwc-radio-list-item[value="${name}"]`)
    );
    selectItem.click();

    const primaryButton = <HTMLElement>(
      oscdFilterButton!.shadowRoot!.querySelector(
        'mwc-button[slot="primaryAction"]'
      )
    );
    primaryButton.click();

    await element.updateComplete;
  }
});
