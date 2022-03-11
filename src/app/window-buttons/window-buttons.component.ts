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
    if(!app.reduced)
    {
      app.position = this.elementRef.nativeElement.offsetParent.style.transform;
    }
    
    app.reduced = true;
    app.focused = false;
  }

  onMaximize(app: App) {
    if(!app.maximized)
    {
      app.position = this.elementRef.nativeElement.offsetParent.style.transform;
    }

    app.maximized ? app.maximized = false : app.maximized = true;
    app.focused = true;
  }

  onClose(app: App) {
    app.opened = false;
    app.reduced = false;
    app.maximized = false;
    app.focused = false;
    app.position = '';
  }

}
