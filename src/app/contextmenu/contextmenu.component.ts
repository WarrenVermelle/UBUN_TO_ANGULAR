import { Component, OnInit } from '@angular/core';
import { AppsService } from '../services/apps.services';

@Component({
  selector: 'app-contextmenu',
  templateUrl: './contextmenu.component.html',
  styleUrls: ['./contextmenu.component.scss']
})
export class ContextmenuComponent implements OnInit {

  constructor(private appsService: AppsService) { }

  ngOnInit(): void {
  }

  createFolder() 
  {
    console.log('new folder created')
  }

  openFiles() 
  {
    this.appsService.openWindow(this.appsService.softwares[2], 'desktop');
  }

  openTerminal() 
  {
    this.appsService.openWindow(this.appsService.softwares[3], 'desktop');
  }

}
