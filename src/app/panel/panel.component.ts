import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  date = new Date();
  time!: number;

  selected!: string;

  private eventSubscription!: Subscription;

  @Input() event!: Observable<void>;

  constructor() {
    setInterval(() => {
      this.time = Date.now();
    }, 1);
  }

  ngOnInit(): void {
    this.eventSubscription = this.event.subscribe(() => this.selected = '');
  }

  ngOnDestroy() {
    this.eventSubscription.unsubscribe();
  }

  onClick(indicator?: string) {
    if(indicator === 'menu')
    {
      this.selected = 'menu';
      console.log('open menu panel');
    }
    else if(indicator === 'datetime')
    {
      this.selected = 'datetime';
      console.log('open datetime panel');
    }
    else
    {
      this.selected = 'indicators';
      console.log('open indicators panel');
    }
  }
}
