import { Component, Input, OnInit } from '@angular/core';
import { Software } from '../models/software.model';
import { Window } from '../models/window.model';
import { AppsService } from '../services/apps.services';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss'],
})
export class WindowComponent implements OnInit {

  @Input() software!: Software;
  @Input() window!: Window;
  @Input() explorer!: Array<any>;
  moving: boolean = false;

  constructor(private appsService: AppsService) { }

  ngOnInit(): void {
    
  }

  clickWindow(window: Window) {
    this.appsService.unfocusAllSoftwares();
    this.software.focused = true;
    this.appsService.unfocusAllWindows();
    window.focused = true;

    // focused win get the first position
    const pos = this.software.windows.findIndex(x => x === window);
    this.software.windows.push(this.software.windows.splice(pos,1)[0]);
  }
}
