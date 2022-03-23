import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firefox-content',
  templateUrl: './firefox-content.component.html',
  styleUrls: ['./firefox-content.component.scss']
})
export class FirefoxContentComponent implements OnInit {

  url: string = 'https://www.google.fr/';

  constructor() { }

  ngOnInit(): void {
  }

}
