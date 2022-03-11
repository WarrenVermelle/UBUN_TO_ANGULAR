import { Component, Input, OnInit } from '@angular/core';
import { App } from '../models/apps.model';

@Component({
  selector: 'app-shortcuts',
  templateUrl: './shortcuts.component.html',
  styleUrls: ['./shortcuts.component.scss']
})
export class ShortcutsComponent implements OnInit {

  @Input() apps!: App[];
  @Input() shortcutedApps!: App[];

  constructor() { }

  ngOnInit(): void {

  }

  onClickShortcut(shortcutedApp: App) {
    if(shortcutedApp.opened === false) {
      shortcutedApp.opened = true;
      this.shortcutedApps.forEach(function(app) {
        app.focused = false;
      });
      shortcutedApp.focused = true;
      shortcutedApp.reduced = false;
    } else if(shortcutedApp.reduced === true){
      shortcutedApp.reduced = false;
      this.shortcutedApps.forEach(function(app) {
        app.focused = false;
      });
      shortcutedApp.focused = true;
    } else {
      this.apps.forEach(function(app) {
        app.focused = false;
      });
      shortcutedApp.focused = true;
    }
  }
}
