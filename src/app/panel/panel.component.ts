import { Component, Input, OnInit } from '@angular/core';
import { App } from '../models/apps.model';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  date = new Date();
  time!: number;

  isSelected: boolean = false;

  @Input() app!: App;

  constructor() {

    setInterval(() => {
      this.time = Date.now();
    }, 1);
  }

  ngOnInit(): void {
  }

  select(n: any)
  {
    console.log(n);
  }
}
