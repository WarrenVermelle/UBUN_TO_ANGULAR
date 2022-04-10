import { Component, Input, OnInit } from '@angular/core';
import { Software } from 'src/app/models/software.model';
import { AppsService } from 'src/app/services/apps.services';

@Component({
  selector: 'app-explorer-tools',
  templateUrl: './explorer-tools.component.html',
  styleUrls: ['./explorer-tools.component.scss']
})
export class ExplorerToolsComponent implements OnInit {

  @Input() software!: Software;
  icons!: any;

  constructor( appsService: AppsService) { 
    this.icons = appsService.icons;
  }

  ngOnInit(): void {
    
  }

}
