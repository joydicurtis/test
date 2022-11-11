import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  host: {
    'class': 'features'
  }
})
export class FeaturesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
