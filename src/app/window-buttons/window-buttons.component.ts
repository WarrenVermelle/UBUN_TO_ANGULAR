import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Software } from '../models/software.model';
import { Window } from '../models/window.model';

@Component({
  selector: 'app-window-buttons',
  templateUrl: './window-buttons.component.html',
  styleUrls: ['./window-buttons.component.scss']
})
export class WindowButtonsComponent implements OnInit {

  @Input() software!: Software;
  @Input() window!: Window;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  reduce() {
    if(this.software.reducable === true)
    {
      this.window.reduced = true;
      this.software.focused = false;
      this.window.focused = false;
    }
  }

  maximize() {
    if(this.software.resizable === true)
    {
      if(!this.window.maximized)
      {
        this.window.position = this.elementRef.nativeElement.offsetParent.style.transform;
      }
  
      this.window.maximized ? this.window.maximized = false : this.window.maximized = true;
      this.window.focused = true;
    }
  }

  close() {
    this.software.removeWindow = this.window;
    this.software.focused = false;
    this.window.reduced = false;
    this.window.maximized = false;
    this.window.focused = false;
    this.window.position = 'translate3d(150px, 150px, 0px)';
  }

}
