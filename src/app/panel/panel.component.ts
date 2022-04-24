import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  date = new Date();
  time!: number;

  menu: boolean = false;
  datetime: boolean = false;
  indicators: boolean = false;

  constructor() {
    setInterval(() => {
      this.time = Date.now();
    }, 1);
  }

  ngOnInit(): void {
  }

  onClick(e: any) {
    console.log(e.target);
  }
}
