import { Component, Input, OnInit } from '@angular/core';
import { Software } from '../models/software.model';
import { Window } from '../models/window.model';

@Component({
  selector: 'app-contextmenu',
  templateUrl: './contextmenu.component.html',
  styleUrls: ['./contextmenu.component.scss']
})
export class ContextmenuComponent implements OnInit {

  @Input() softwares!: Array<Software>;

  constructor() { }

  ngOnInit(): void {
  }

  createFolder() {
    console.log('new folder created')
  }

  openFiles() {
    this.softwares[2].addWindow = new Window('desktop');
  }

}
