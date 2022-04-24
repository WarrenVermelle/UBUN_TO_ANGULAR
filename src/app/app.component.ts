import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Icon } from './models/icon.model';
import { Software } from './models/software.model';
import { Window } from './models/window.model';
import { AppsService } from './services/apps.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{

  selected: boolean = false;

  e!: any;
  isFullscreen: boolean = false;
  focusedApp!: any;

  softwares!: Software[];
  icons!: Icon[];
  windows!: any;
  shortcuts!: any;

  contextmenu: boolean = false;

  constructor(private appsService: AppsService, @Inject(DOCUMENT) private document: any) {

  }

  ngOnInit(): void 
  {
    this.e = document.documentElement;

    // open identity window on start
    this.appsService.softwares[0].addWindow = new Window();

    this.softwares = this.appsService.softwares;
    this.icons = this.appsService.icons;
    this.shortcuts = this.appsService.shortcuts;
  }

  leftClick(e: any, dbl: boolean, software?: Software): void
  {
    e.stopPropagation();
    if(dbl && software) {
      this.appsService.unfocusAllWindows();
      software.addWindow = new Window();
    }
    else
    {
      if(e.target.classList[0] === 'desktop')
      {
        this.selected = true;
      }
      
      if(e.target.id === 'desktop')
      {
        this.selected = false;
        this.appsService.unfocusAllWindows();
      }
    }
  }

  rightClick(e: any): any
  {
    console.log(e);
    this.contextmenu = !this.contextmenu;
  }

  onFullscreen(): void
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
