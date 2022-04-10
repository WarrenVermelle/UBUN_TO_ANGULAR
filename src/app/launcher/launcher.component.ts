import { Component, Input, OnInit } from '@angular/core';
import { Icon } from '../models/icon.model';
import { Software } from '../models/software.model';
import { Window } from '../models/window.model';

@Component({
  selector: 'app-launcher',
  templateUrl: './launcher.component.html',
  styleUrls: ['./launcher.component.scss']
})
export class LauncherComponent implements OnInit {

  @Input() softwares!: Software[];
  @Input() icons!: Icon[];

  constructor() { }

  ngOnInit(): void { }

  leftClickShortcut(software: Software) {
    for (const software of this.softwares) {
      software.focused = false;
      if(software.windows.length > 0) {
        for(const window of software.windows) {
          window.focused = false;
        }
      }
    }

    if(software.openable)
    {
      if(software.windows.length > 0)
      {
        software.windows[0].reduced = false;
        software.windows[0].focused = true;
        software.focused = true;
      }
      else
      {
        software.addWindow = new Window();
        software.focused = true;
      }
    }
  }

  rightClickShortcut(software: Software) {
    console.log('right click on ' + software.type);
    return false;
  }
}
