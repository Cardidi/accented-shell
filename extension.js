//    Accented panel
//    GNOME Shell extension
//    @Cardidi 2025
//    @fthx 2025

import {Extension, gettext as _} from 'resource:///org/gnome/shell/extensions/extension.js';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';


export default class AccentedPanelExtension extends Extension{
    enable() {
        Main.panel.add_style_class_name('panel-accent');
        Main.overview._overview.add_style_class_name('panel-accent');
    }

    disable() {
        Main.panel.remove_style_class_name('panel-accent');
        Main.overview._overview.remove_style_class_name('panel-accent');
    }
}
