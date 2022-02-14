import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.scss']
})
export class TaskbarComponent implements OnInit {

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
