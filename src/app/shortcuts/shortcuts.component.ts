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
      this.apps.forEach(function(app) {
        app.focused = false;
      });
      app.focused = true;
      app.reduced = false;
    } else if(app.reduced === true){
      app.reduced = false;
    } else {
      this.apps.forEach(function(app) {
        app.focused = false;
      });
      app.focused = true;
    }
    
  }
}
