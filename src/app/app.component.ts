import { Component, OnInit } from '@angular/core';
import { App } from './models/apps.model';
import { AppsService } from './services/apps.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  apps!: App[];

  constructor(private appsService: AppsService) {}

  ngOnInit(): void {

    this.apps = this.appsService.apps
    
  }

}
