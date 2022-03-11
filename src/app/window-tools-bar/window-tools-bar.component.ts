import { Component, Input, OnInit } from '@angular/core';
import { App } from '../models/apps.model';

@Component({
  selector: 'app-window-tools-bar',
  templateUrl: './window-tools-bar.component.html',
  styleUrls: ['./window-tools-bar.component.scss']
})
export class WindowToolsBarComponent implements OnInit {

  @Input() app!: App;

  constructor() { }

  ngOnInit(): void {
  }

}
