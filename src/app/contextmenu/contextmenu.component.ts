import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Software } from '../models/software.model';
import { Window } from '../models/window.model';
import { AppsService } from '../services/apps.services';

@Component({
  selector: 'app-contextmenu',
  templateUrl: './contextmenu.component.html',
  styleUrls: ['./contextmenu.component.scss']
})
export class ContextmenuComponent implements OnInit {

  @Input() softwares!: Software[];

  constructor(private appsService: AppsService) { }

  ngOnInit(): void {
  }

  createFolder() 
  {
    this.appsService.explorer[2][4][0][4].push(
      [
        'new folder',
        'folder',
        this.appsService.icons[3],
        false,
        []
      ]
    )
  }

  openFiles() 
  {
    // let win = this.softwares[2].openWindow(this.softwares[2], 'desktop')
    // if(win !== null)
    // {
    //   win.focused = true;
    // }
    let win = this.softwares[2].addWindow = new Window(true, true, 'desktop');
    this.softwares[2].focused = true;
    win.focused = true;
  }

  openTerminal() 
  {
    this.softwares[2].openWindow(this.softwares[3], 'terminal')
  }

}
