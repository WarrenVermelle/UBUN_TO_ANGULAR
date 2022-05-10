import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
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
  position!: string;

  //
  onClickDesktop: Subject<void> = new Subject<void>();

  constructor(private appsService: AppsService, @Inject(DOCUMENT) private document: any) {

  }

  ngOnInit(): void 
  {
    this.e = document.documentElement;

    // open identity window on start
    this.appsService.softwares[0].addWindow = new Window();

    this.softwares = this.appsService.softwares;
    this.icons = this.appsService.icons;
    this.shortcuts = this.appsService.explorer[2][4][0][4];
    
  }

  leftClick(e: any, dbl: boolean, shortcut?: Array<any>): void
  {
    this.contextmenu = false;
    if(dbl && shortcut) {
      this.appsService.unfocusAllWindows();
      const software = this.softwares.find(x => x.type === shortcut[1]);
      if(software)
      {
        software.addWindow = new Window(shortcut[0]);
      }
    }
    else
    {
      if(shortcut)
      {
        this.shortcuts.forEach((element: any) => {
          element[3] = false;
        });
        shortcut[3] = true
      }

      if(e.target.id === 'dragzone')
      {
        this.shortcuts.forEach((element: any) => {
          element[3] = false;
        });
      }
      this.onClickDesktop.next();
      this.appsService.unfocusAllWindows();
      this.appsService.unfocusAllSoftwares();
    }
  }

  rightClick(e: any, shortcut?: Array<any>): any
  {
    if(e.target.id === 'dragzone') {
      this.appsService.unfocusAllWindows();
      this.appsService.unfocusAllSoftwares();

      // bottom right
      if(window.innerWidth-e.clientX < 220 && window.innerHeight-e.clientY < 305)
      {
        this.position = 'translate3d(' + (e.clientX-(220+72)) + 'px, ' + (e.clientY-(305+27)) + 'px, 0px)';
      }
      // bottom left
      else if(window.innerHeight-e.clientY < 305)
      {
        this.position = 'translate3d(' + (e.clientX-72) + 'px, ' + (e.clientY-(305+27)) + 'px, 0px)';
      }
      // top right
      else if(window.innerWidth-e.clientX < 220)
      {
        this.position = 'translate3d(' + (e.clientX-(220+72)) + 'px, ' + (e.clientY-27) + 'px, 0px)';
      }
      // top left
      else
      {
        this.position = 'translate3d(' + (e.clientX-72) + 'px, ' + (e.clientY-27) + 'px, 0px)';
      }
      
      if(this.contextmenu === false){
        this.contextmenu = !this.contextmenu;
      }
    }
    if(shortcut)
    {
      console.log('right click on ' + shortcut[0]);
    }
    return false;
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

  drop(event: CdkDragDrop<any>) {
    moveItemInArray(this.shortcuts, event.previousIndex, event.currentIndex);
  }
}
