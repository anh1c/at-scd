import { pluginTag } from '@compas-oscd/open-scd/dist/plugin-tag.js';
// editor plugins
import { default as IED } from './editors/IED.js';
import { default as Substation } from './editors/Substation.js';
import { default as SingleLineDiagram } from './editors/SingleLineDiagram.js';
import { default as GooseSubscriberMessageBinding } from './editors/GooseSubscriberMessageBinding.js';
import { default as GooseSubscriberDataBinding } from './editors/GooseSubscriberDataBinding.js';
import { default as SMVSubscriberMessageBinding } from './editors/SMVSubscriberMessageBinding.js';
import { default as SMVSubscriberDataBinding } from './editors/SMVSubscriberDataBinding.js';
import { default as Communication } from './editors/Communication.js';
import { default as Protocol104 } from './editors/Protocol104.js';
import { default as Templates } from './editors/Templates.js';
import { default as Cleanup } from './editors/Cleanup.js';
// validator plugins
import { default as ValidateSchema } from './validators/ValidateSchema.js';
import { default as ValidateTemplates } from './validators/ValidateTemplates.js';
// menu plugins
import { default as OpenProject } from './menu/OpenProject.js';
import { default as SaveProject } from './menu/SaveProject.js';
import { default as NewProject } from './menu/NewProject.js';
import { default as VirtualTemplateIED } from './menu/VirtualTemplateIED.js';
import { default as SubscriberInfo } from './menu/SubscriberInfo.js';
import { default as UpdateDescriptionABB } from './menu/UpdateDescriptionABB.js';
import { default as UpdateDescriptionSEL } from './menu/UpdateDescriptionSEL.js';
import { default as SclHistory } from './menu/SclHistory.js';
import { default as Help } from './menu/Help.js';
import { default as ExportCommunication } from './menu/ExportCommunication.js';
import { default as ImportIEDs } from './menu/ImportIEDs.js';
import { default as Merge } from './menu/Merge.js';
import { default as UpdateSubstation } from './menu/UpdateSubstation.js';
import { default as CompareIED } from './menu/CompareIED.js';
export var OscdPluginSrc;
(function (OscdPluginSrc) {
    OscdPluginSrc["IED"] = "/oscd-plugins/editors/IED.js";
    OscdPluginSrc["Substation"] = "/oscd-plugins/editors/Substation.js";
    OscdPluginSrc["SingleLineDiagram"] = "/oscd-plugins/editors/SingleLineDiagram.js";
    OscdPluginSrc["GooseSubscriberMessageBinding"] = "/oscd-plugins/editors/GooseSubscriberMessageBinding.js";
    OscdPluginSrc["GooseSubscriberDataBinding"] = "/oscd-plugins/editors/GooseSubscriberDataBinding.js";
    OscdPluginSrc["SMVSubscriberMessageBinding"] = "/oscd-plugins/editors/SMVSubscriberMessageBinding.js";
    OscdPluginSrc["SMVSubscriberDataBinding"] = "/oscd-plugins/editors/SMVSubscriberDataBinding.js";
    OscdPluginSrc["Communication"] = "/oscd-plugins/editors/Communication.js";
    OscdPluginSrc["Protocol104"] = "/oscd-plugins/editors/Protocol104.js";
    OscdPluginSrc["Templates"] = "/oscd-plugins/editors/Templates.js";
    OscdPluginSrc["Cleanup"] = "/oscd-plugins/editors/Cleanup.js";
    OscdPluginSrc["ValidateSchema"] = "/oscd-plugins/validators/ValidateSchema.js";
    OscdPluginSrc["ValidateTemplates"] = "/oscd-plugins/validators/ValidateTemplates.js";
    OscdPluginSrc["OpenProject"] = "/oscd-plugins/menu/OpenProject.js";
    OscdPluginSrc["SaveProject"] = "/oscd-plugins/menu/SaveProject.js";
    OscdPluginSrc["NewProject"] = "/oscd-plugins/menu/NewProject.js";
    OscdPluginSrc["VirtualTemplateIED"] = "/oscd-plugins/menu/VirtualTemplateIED.js";
    OscdPluginSrc["SubscriberInfo"] = "/oscd-plugins/menu/SubscriberInfo.js";
    OscdPluginSrc["UpdateDescriptionABB"] = "/oscd-plugins/menu/UpdateDescriptionABB.js";
    OscdPluginSrc["UpdateDescriptionSEL"] = "/oscd-plugins/menu/UpdateDescriptionSEL.js";
    OscdPluginSrc["SclHistory"] = "/oscd-plugins/menu/SclHistory.js";
    OscdPluginSrc["Help"] = "/oscd-plugins/menu/Help.js";
    OscdPluginSrc["ExportCommunication"] = "/oscd-plugins/menu/ExportCommunication.js";
    OscdPluginSrc["ImportIEDs"] = "/oscd-plugins/menu/ImportIEDs.js";
    OscdPluginSrc["Merge"] = "/oscd-plugins/menu/Merge.js";
    OscdPluginSrc["UpdateSubstation"] = "/oscd-plugins/menu/UpdateSubstation.js";
    OscdPluginSrc["CompareIED"] = "/oscd-plugins/menu/CompareIED.js";
})(OscdPluginSrc || (OscdPluginSrc = {}));
const plugins = {
    [OscdPluginSrc.IED]: IED,
    [OscdPluginSrc.Substation]: Substation,
    [OscdPluginSrc.SingleLineDiagram]: SingleLineDiagram,
    [OscdPluginSrc.GooseSubscriberMessageBinding]: GooseSubscriberMessageBinding,
    [OscdPluginSrc.GooseSubscriberDataBinding]: GooseSubscriberDataBinding,
    [OscdPluginSrc.SMVSubscriberMessageBinding]: SMVSubscriberMessageBinding,
    [OscdPluginSrc.SMVSubscriberDataBinding]: SMVSubscriberDataBinding,
    [OscdPluginSrc.Communication]: Communication,
    [OscdPluginSrc.Protocol104]: Protocol104,
    [OscdPluginSrc.Templates]: Templates,
    [OscdPluginSrc.Cleanup]: Cleanup,
    [OscdPluginSrc.ValidateSchema]: ValidateSchema,
    [OscdPluginSrc.ValidateTemplates]: ValidateTemplates,
    [OscdPluginSrc.OpenProject]: OpenProject,
    [OscdPluginSrc.SaveProject]: SaveProject,
    [OscdPluginSrc.NewProject]: NewProject,
    [OscdPluginSrc.VirtualTemplateIED]: VirtualTemplateIED,
    [OscdPluginSrc.SubscriberInfo]: SubscriberInfo,
    [OscdPluginSrc.UpdateDescriptionABB]: UpdateDescriptionABB,
    [OscdPluginSrc.UpdateDescriptionSEL]: UpdateDescriptionSEL,
    [OscdPluginSrc.SclHistory]: SclHistory,
    [OscdPluginSrc.Help]: Help,
    [OscdPluginSrc.ExportCommunication]: ExportCommunication,
    [OscdPluginSrc.ImportIEDs]: ImportIEDs,
    [OscdPluginSrc.Merge]: Merge,
    [OscdPluginSrc.UpdateSubstation]: UpdateSubstation,
    [OscdPluginSrc.CompareIED]: CompareIED
};
export function registerOscdPlugins() {
    for (const [src, pluginConstructor] of Object.entries(plugins)) {
        const tag = pluginTag(src);
        customElements.define(tag, pluginConstructor);
    }
}
//# sourceMappingURL=oscd-plugins.js.map