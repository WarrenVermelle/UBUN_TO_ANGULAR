import { Component, Input, OnInit } from '@angular/core';
import { App } from '../models/apps.model';
import { AppsService } from '../services/apps.services';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent implements OnInit {

  @Input() app!: App;
  apps!: App[];
  moving: boolean = false;

  constructor(private appsService: AppsService) {

  }

  ngOnInit(): void {
    this.apps = this.appsService.apps;
  }

  onFocus(app: App) {
    this.appsService.unfocusAll();
    app.win_status.focused = true;
  }
}
