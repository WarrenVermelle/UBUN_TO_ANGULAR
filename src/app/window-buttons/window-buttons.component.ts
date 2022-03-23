import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { App } from '../models/apps.model';

@Component({
  selector: 'app-window-buttons',
  templateUrl: './window-buttons.component.html',
  styleUrls: ['./window-buttons.component.scss']
})
export class WindowButtonsComponent implements OnInit {

  @Input() app!: App;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  onReduce(app: App) {
    if(app.win_status.reducable === true)
    {
      app.win_status.reduced = true;
      app.win_status.focused = false;
    }
  }

  onMaximize(app: App) {
    if(app.win_status.resizable === true)
    {
      if(!app.win_status.maximized)
      {
        app.win_status.position = this.elementRef.nativeElement.offsetParent.style.transform;
      }
  
      app.win_status.maximized ? app.win_status.maximized = false : app.win_status.maximized = true;
      app.win_status.focused = true;
    }
  }

  onClose(app: App) {
    app.win_status.opened = false;
    app.win_status.reduced = false;
    app.win_status.maximized = false;
    app.win_status.focused = false;
    app.win_status.position = 'translate3d(150px, 150px, 0px)';
  }

}
