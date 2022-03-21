import { Component, ElementRef, OnInit } from '@angular/core';
import { App } from './models/apps.model';
import { AppsService } from './services/apps.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  apps!: App[];
  launcherApps!: App[];
  desktopApps!: App[];
  selected: boolean = false;

  constructor(private appsService: AppsService) {}

  ngOnInit(): void {
    this.apps = this.appsService.apps
    this.launcherApps = this.appsService.getLauncherApps();
    this.desktopApps = this.appsService.getDesktopApps();
  }

  onClickDesktopShortcut(launcherApp: App) {
    if(launcherApp.win_status.opened === false) {
      launcherApp.win_status.opened = true;
      this.launcherApps.forEach(function(app) {
        app.win_status.focused = false;
      });
      launcherApp.win_status.focused = true;
      launcherApp.win_status.reduced = false;
    } else if(launcherApp.win_status.reduced === true){
      launcherApp.win_status.reduced = false;
      this.launcherApps.forEach(function(app) {
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

  onSelectDesktopShortcut(e: any)
  {
    if(e.target.classList[0] === 'desktop')
    {
      this.selected = true;
    }
    
    if(e.target.id === 'desktop')
    {
      this.selected = false;
    }
  }

  onRightClick(e: any)
  {
    return true;
  }
}
