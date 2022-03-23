import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { App } from './models/apps.model';
import { AppsService } from './services/apps.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{

  apps!: App[];
  launcherApps!: App[];
  desktopApps!: App[];
  selected: boolean = false;

  e!: any;
  isFullscreen: boolean = false;

  constructor(private appsService: AppsService, @Inject(DOCUMENT) private document: any) { }

  ngOnInit(): void {
    this.apps = this.appsService.apps
    this.launcherApps = this.appsService.getLauncherApps();
    this.desktopApps = this.appsService.getDesktopApps();

    this.e = document.documentElement;
  }

  onClickDesktopShortcut(launcherApp: App) {
    if(launcherApp.win_status.opened === false) 
    {
      launcherApp.win_status.opened = true;
      this.appsService.unfocusAll()
      launcherApp.win_status.focused = true;
      launcherApp.win_status.reduced = false;
    } 
    else if(launcherApp.win_status.reduced === true)
    {
      launcherApp.win_status.reduced = false;
      this.appsService.unfocusAll()
      launcherApp.win_status.focused = true;
    } 
    else 
    {
      this.appsService.unfocusAll()
      launcherApp.win_status.focused = true;
    }
  }

  onClickDesktop(e: any)
  {
    if(e.target.classList[0] === 'desktop')
    {
      this.selected = true;
    }
    
    if(e.target.id === 'desktop')
    {
      this.selected = false;
      this.appsService.unfocusAll();
    }
  }

  onRightClick(e: any)
  {
    // change to false at the end of project
    return true;
  }

  onFullscreen()
  {
    if(this.isFullscreen === false)
    {
      this.e.requestFullscreen();
      this.isFullscreen = true;
    }
    else
    {
      this.document.exitFullscreen();
      this.isFullscreen = false;
    }
    
  }
}
