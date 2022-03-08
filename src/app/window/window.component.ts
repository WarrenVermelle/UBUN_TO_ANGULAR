import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { App } from '../models/apps.model';
import { AppsService } from '../services/apps.services';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent implements OnInit {

  @Input() app!: App;
  apps!: App[];
  transform!: any;

  constructor(private appsService: AppsService, private elementRef: ElementRef) {

  }

  ngOnInit(): void {
    this.apps = this.appsService.apps;
  }

  onReduce(app: App) {
    if(!app.reduced)
    {
      app.position = this.elementRef.nativeElement.firstChild.style.transform;
    }
    
    app.reduced = true;
    app.focused = false;
  }

  onMaximize(app: App) {
    if(!app.maximized)
    {
      app.position = this.elementRef.nativeElement.firstChild.style.transform;
    }

    app.maximized ? app.maximized = false : app.maximized = true;
    app.focused = true;
  }

  onClose(app: App) {
    app.opened = false;
    app.reduced = false;
    app.focused = false;
    app.position = 'translate3d(0px, 0px, 0px)';
  }

  onFocus(app: App) {
    this.appsService.unfocusAll();
    app.focused = true;
  }

}
