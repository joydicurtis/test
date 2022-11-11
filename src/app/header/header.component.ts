import { Component, HostBinding, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  host: {
    'class': 'header'
  }
})
export class HeaderComponent {

  public isNavVisible: boolean = false;

  @Input() public set desktopMode(value: unknown) {
    this.isDesktopMode = coerceBooleanProperty(value);
  }

  @HostBinding('class.header--desktop')
    public isDesktopMode: boolean = false;

}
