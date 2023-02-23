import { Component } from '@angular/core';

@Component({
  selector: 'app-fancymenu',
  templateUrl: './fancymenu.component.html',
  styleUrls: ['./fancymenu.component.scss'],
})
export class FancymenuComponent {
  public showIframe = false;

  public toggleIframe() {
    this.showIframe = !this.showIframe;
  }
}
