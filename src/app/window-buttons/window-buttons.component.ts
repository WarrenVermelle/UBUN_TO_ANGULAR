import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Output() closed: EventEmitter<Software> = new EventEmitter();

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  reduce(window: Window) {
    if(this.software.reducable === true)
    {
      this.window.reduced = true;
      this.software.focused = false;
      this.window.focused = false;
    }
  }

  maximize(window: Window) {
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

  close(window: Window) {
    this.software.removeWindow(window);
    this.software.focused = false;
    this.window.reduced = false;
    this.window.maximized = false;
    this.window.focused = false;
    this.window.position = 'translate3d(150px, 150px, 0px)';
    this.closed.emit(this.software);
  }

}
