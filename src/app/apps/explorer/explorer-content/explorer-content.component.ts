import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-explorer-content',
  templateUrl: './explorer-content.component.html',
  styleUrls: ['./explorer-content.component.scss']
})
export class ExplorerContentComponent implements OnInit {

  @Input() file!: string;

  constructor() { }

  ngOnInit(): void {
    
  }

}
