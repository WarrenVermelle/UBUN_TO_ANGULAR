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
  shortcutedApps!: App[];
  desktopedApps!: App[];
  selected: boolean = false;

  constructor(private appsService: AppsService) {}

  ngOnInit(): void {
    this.apps = this.appsService.apps
    this.shortcutedApps = this.appsService.getShortcutedApps();
    this.desktopedApps = this.appsService.getDesktopedApps();
  }

  onClickDesktopShortcut(shortcutedApp: App) {
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
