import { Component, Input, OnInit } from '@angular/core';
import { App } from 'src/app/models/apps.model';

@Component({
  selector: 'app-explorer-tools',
  templateUrl: './explorer-tools.component.html',
  styleUrls: ['./explorer-tools.component.scss']
})
export class ExplorerToolsComponent implements OnInit {

  @Input() app!: App;

  constructor() { }

  ngOnInit(): void {
  }

}
