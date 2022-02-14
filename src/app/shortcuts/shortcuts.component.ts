import { Component, Input, OnInit } from '@angular/core';
import { App } from '../models/apps.model';

@Component({
  selector: 'app-shortcuts',
  templateUrl: './shortcuts.component.html',
  styleUrls: ['./shortcuts.component.scss']
})
export class ShortcutsComponent implements OnInit {

  @Input() apps!: App[];

  constructor() { }

  ngOnInit(): void {

  }

  onClickShortcut(app: App) {

    if(app.opened === false) {
      app.opened = true;
      app.reduced = true;
      this.apps.forEach(function(app) {
        app.focused = false;
      });
      app.focused = true;
    } else {
      this.apps.forEach(function(app) {
        app.focused = false;
      });
      app.focused = true;
    }
    
  }
}
