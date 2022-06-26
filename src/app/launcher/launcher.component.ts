import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Icon } from '../models/icon.model';
import { Software } from '../models/software.model';
import { Window } from '../models/window.model';

@Component({
  selector: 'app-launcher',
  templateUrl: './launcher.component.html',
  styleUrls: ['./launcher.component.scss']
})
export class LauncherComponent implements OnInit {

  selected: boolean = false;

  @Input() softwares!: Software[];
  @Input() icons!: Icon[];
  @Input() file!: string;

  @Output() focusChanged: EventEmitter<Software> = new EventEmitter();
  @Output() selectReset: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  leftClickShortcut(software: Software) {
    
    this.selectReset.emit('');
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
      this.focusChanged.emit(software);
      if(software.windows.length > 0)
      {
        software.windows.forEach(window => window.reduced = false);
        software.windows[software.windows.length-1].focused = true;
        software.focused = true;
      }
      else
      {
        if(software.type === 'files')
        {
          software.addWindow = new Window(true, true, 'home');
        }
        else if(software.type === 'identity')
        {
          software.addWindow = new Window(false, false);
        }
        else
        {
          software.addWindow = new Window(true, true);
        }
        
        software.focused = true;
      }
    }
  }

  rightClickShortcut(software: Software) {
    console.log('right click on ' + software.type);
    return false;
  }

  openAllApps() {
    console.log('show all apps');
  }

  drop(event: CdkDragDrop<any>) {
    moveItemInArray(this.softwares, event.previousIndex, event.currentIndex);
  }
}
