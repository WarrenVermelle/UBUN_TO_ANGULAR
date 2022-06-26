import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Icon } from '../models/icon.model';
import { Software } from '../models/software.model';
import { AppsService } from '../services/apps.services';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  date = new Date();
  time!: number;

  private eventSubscription!: Subscription;

  @Input() event!: Observable<void>;
  @Input() focusedSoftware!: Software | null;
  @Input() selected!: string;

  icons!: Array<Icon>;

  constructor(private appsService: AppsService) {
    setInterval(() => {
      this.time = Date.now();
    }, 1);
  }

  ngOnInit(): void {
    this.eventSubscription = this.event.subscribe(() => this.selected = 'none');
    this.icons = this.appsService.icons;
  }

  ngOnDestroy() {
    this.eventSubscription.unsubscribe();
  }

  onClick(indicator?: string) {
    if(!indicator)
    {
      this.selected = 'none';
    }
    else
    {
      if(indicator === 'menu')
      {
        if(this.selected === 'menu')
        {
          this.selected = 'none';
        }
        else
        {
          this.selected = 'menu';
        }
      }
      else if(indicator === 'datetime')
      {
        if(this.selected === 'datetime')
        {
          this.selected = 'none';
        }
        else
        {
          this.selected = 'datetime';
        }
      }
      else if(indicator === 'indicators')
      {
        if(this.selected === 'indicators')
        {
          this.selected = 'none';
        }
        else
        {
          this.selected = 'indicators';
        }
      }
      else
      {
        this.selected = 'none';
      }
    }
  }
}
