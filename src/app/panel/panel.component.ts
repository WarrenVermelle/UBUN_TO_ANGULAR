import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  date = new Date();
  time!: number;

  constructor() {

    setInterval(() => {
      this.time = Date.now();
    }, 1);

  }

  ngOnInit(): void {
  }

}
