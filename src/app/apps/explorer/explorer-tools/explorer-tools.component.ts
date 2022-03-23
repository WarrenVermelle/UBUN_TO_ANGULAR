import { Component, Input, OnInit } from '@angular/core';
import { App } from 'src/app/models/apps.model';
import { AppsService } from 'src/app/services/apps.services';

@Component({
  selector: 'app-explorer-tools',
  templateUrl: './explorer-tools.component.html',
  styleUrls: ['./explorer-tools.component.scss']
})
export class ExplorerToolsComponent implements OnInit {

  @Input() app!: App;
  icons!: any;

  constructor( appsService: AppsService) { 
    this.icons = appsService.icons;
  }

  ngOnInit(): void {
    
  }

}
