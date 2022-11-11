import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  host: {
    'class': 'information'
  }
})
export class InformationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() public set desktopMode(value: unknown) {
    this.isDesktopMode = coerceBooleanProperty(value);
  }

  @HostBinding('class.information--desktop')
    public isDesktopMode: boolean = false;

}
