import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  host: {
    'class': 'sections'
  }
})
export class SectionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
