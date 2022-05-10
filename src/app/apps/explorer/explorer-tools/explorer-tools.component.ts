import { Component, Input, OnInit } from '@angular/core';
import { Icon } from 'src/app/models/icon.model';
import { Software } from 'src/app/models/software.model';
import { Window } from 'src/app/models/window.model';
import { AppsService } from 'src/app/services/apps.services';

@Component({
  selector: 'app-explorer-tools',
  templateUrl: './explorer-tools.component.html',
  styleUrls: ['./explorer-tools.component.scss']
})
export class ExplorerToolsComponent implements OnInit {

  @Input() software!: Software;
  @Input() window!: Window;
  explorer!: Array<any>;
  explorerIcon!: Icon;
  icons!: Array<Icon>;

  constructor(private appsService: AppsService ) {

  }

  ngOnInit(): void {
    this.explorer = this.appsService.explorer;
    this.explorerIcon = this.appsService.getIconByName(this.window.type);
    this.icons = this.appsService.icons;
  }

}
