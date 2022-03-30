import { Component, Input, OnInit } from '@angular/core';
import { App } from '../models/apps.model';

@Component({
  selector: 'app-launcher',
  templateUrl: './launcher.component.html',
  styleUrls: ['./launcher.component.scss']
})
export class LauncherComponent implements OnInit {

  @Input() apps!: App[];
  @Input() launcherApps!: App[];

  constructor() { }

  ngOnInit(): void { }

  onClickShortcut(launcherApp: App) {
    if(launcherApp.win_status.openable === true)
    {
      if(launcherApp.win_status.opened === false) {
        launcherApp.win_status.opened = true;
        this.apps.forEach(function(app) {
          app.win_status.focused = false;
        });
        launcherApp.win_status.focused = true;
        launcherApp.win_status.reduced = false;
      } else if(launcherApp.win_status.reduced === true){
        launcherApp.win_status.reduced = false;
        this.apps.forEach(function(app) {
          app.win_status.focused = false;
        });
        launcherApp.win_status.focused = true;
      } else {
        this.apps.forEach(function(app) {
          app.win_status.focused = false;
        });
        launcherApp.win_status.focused = true;
      }
    }
  }


}
