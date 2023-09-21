import { Modules } from "../../../core/enums/console-categories";
import { ConsoleTabs } from "../../../core/enums/console-tabs";

const categoryId = Modules.angularDevelopment;

export const ANGULAR_DEVELOPMENT_LOG_SCRIPTS = `
// ==> Serve
case 'log-${categoryId}:${ConsoleTabs[categoryId][`serve`].id}':
    panels.${categoryId}.${ConsoleTabs[categoryId][`serve`].id} += '<code class="language-' + message.language + '">' + message.content + '</code>';

    if (activePanel === '${categoryId}:${ConsoleTabs[categoryId][`serve`].id}') {
        setActivePanelContent('${categoryId}', '${ConsoleTabs[categoryId][`serve`].id}');
    }
break;

`;