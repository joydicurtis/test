import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  host: {
    'class': 'footer'
  }
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
