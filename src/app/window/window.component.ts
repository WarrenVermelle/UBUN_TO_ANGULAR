import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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

  @Output() focusChanged: EventEmitter<Software> = new EventEmitter();
  @Output() resetSelected: EventEmitter<string> = new EventEmitter();

  constructor(private appsService: AppsService) { }

  ngOnInit(): void {
    
  }

  clickWindow(window: Window) 
  {
    this.appsService.unfocusAllSoftwares();
    this.software.focused = true;
    this.appsService.unfocusAllWindows();
    window.focused = true;

    // focused win get the first position
    const pos = this.software.windows.findIndex(x => x === window);
    this.software.windows.push(this.software.windows.splice(pos,1)[0]);

    this.focusChanged.emit(this.software);
    this.resetSelected.emit('none');
  }

  closed(e: any)
  {
    this.focusChanged.emit(this.software);
  }
}
