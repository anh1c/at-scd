import { get } from 'lit-translate';
import '@material/mwc-button';
import '@material/mwc-list/mwc-check-list-item';
import { oscdHtml } from '@compas-oscd/open-scd/dist/foundation.js';
import '@compas-oscd/open-scd/dist/wizard-textfield.js';
import '@compas-oscd/open-scd/dist/filtered-list.js';
import { find, getValue, identity, newSubWizardEvent, } from '@compas-oscd/open-scd/dist/foundation.js';
import { cloneElement } from '@compas-oscd/xml';
import { createFCDAsWizard } from './fcda.js';
function openFcdaWizard(element) {
    return (wizard) => {
        wizard.dispatchEvent(newSubWizardEvent(() => createFCDAsWizard(element)));
    };
}
function updateDataSetAction(element) {
    return (inputs, wizard) => {
        const name = inputs.find(i => i.label === 'name').value;
        const desc = getValue(inputs.find(i => i.label === 'desc'));
        const oldName = element.getAttribute('name');
        const dataSetUpdateAction = [];
        if (!(name === oldName && desc === element.getAttribute('desc'))) {
            const newElement = cloneElement(element, { name, desc });
            dataSetUpdateAction.push({
                old: { element },
                new: { element: newElement },
            });
        }
        const controlBlockUpdateActions = name !== oldName
            ? Array.from(element.parentElement?.querySelectorAll(`ReportControlBock[datSet=${oldName}], GSEControl[datSet=${oldName}],SampledValueControl[datSet=${oldName}] `) ?? []).map(cb => {
                const newCb = cloneElement(cb, { datSet: name });
                return { old: { element: cb }, new: { element: newCb } };
            })
            : [];
        const fCDARemoveActions = Array.from(wizard.shadowRoot.querySelectorAll('filtered-list > mwc-check-list-item:not([selected])'))
            .map(listItem => find(element, 'FCDA', listItem.value))
            .filter(fcda => fcda)
            .map(fcda => {
            return {
                old: {
                    parent: element,
                    element: fcda,
                    reference: fcda.nextSibling,
                },
            };
        });
        return [
            ...fCDARemoveActions,
            ...dataSetUpdateAction,
            ...controlBlockUpdateActions,
        ];
    };
}
export function editDataSetWizard(element) {
    const name = element.getAttribute('name');
    const desc = element.getAttribute('desc');
    return [
        {
            title: get('wizard.title.edit', { tagName: element.tagName }),
            element,
            primary: {
                label: get('save'),
                icon: 'save',
                action: updateDataSetAction(element),
            },
            menuActions: [
                {
                    icon: 'add',
                    label: get('dataset.fcda.add'),
                    action: openFcdaWizard(element),
                },
            ],
            content: [
                oscdHtml `<wizard-textfield
          label="name"
          .maybeValue=${name}
          helper="${get('scl.name')}"
          required
          disabled="true"
        >
        </wizard-textfield>`,
                oscdHtml `<wizard-textfield
          label="desc"
          .maybeValue=${desc}
          helper="${get('scl.desc')}"
          nullable
          required
        >
        </wizard-textfield>`,
                oscdHtml `<filtered-list multi
          >${Array.from(element.querySelectorAll('FCDA')).map(fcda => oscdHtml `<mwc-check-list-item selected value="${identity(fcda)}"
                >${identity(fcda)
                    .split('>')
                    .pop()}</mwc-check-list-item
              >`)}</filtered-list
        >`,
            ],
        },
    ];
}
//# sourceMappingURL=dataset.js.map