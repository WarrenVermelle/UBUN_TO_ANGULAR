import { Component, Input, OnInit } from '@angular/core';
import { App } from '../models/apps.model';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent implements OnInit {

  @Input() app!: App;

  constructor() { }

  ngOnInit(): void {
    
  }

  onReduce(app: App) {
    app.opened = false;
    app.reduced = true;
    app.focused = false;
  }

  onMaximize(app: App) {
    app.maximized ? app.maximized = false : app.maximized = true;
    app.focused = true;
  }

  onClose(app: App) {
    app.opened = false;
    app.reduced = false;
    app.focused = false;
  }

}
