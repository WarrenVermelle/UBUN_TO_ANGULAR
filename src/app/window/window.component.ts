import { Component, Input, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';
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

  constructor(private appsService: AppsService, private elementRef: ElementRef) { }

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



  reduce(window: Window) {
    if(this.window.reducable === true)
    {
      this.window.reduced = true;
      this.software.focused = false;
      this.window.focused = false;
      this.focusChanged.emit(this.software);
    }
  }

  maximize(window: Window) {
    if(this.window.resizable === true)
    {
      if(!this.window.maximized)
      {
        this.window.position = this.elementRef.nativeElement.childNodes[0].style.transform
      }
  
      this.window.maximized ? this.window.maximized = false : this.window.maximized = true;
      this.window.focused = true;
    }
  }

  close(window: Window) {
    this.software.removeWindow(window);
    this.software.focused = false;
    this.window.reduced = false;
    this.window.maximized = false;
    this.window.focused = false;
    this.window.position = 'translate3d(150px, 150px, 0px)';
    this.focusChanged.emit(this.software);
  }

}
