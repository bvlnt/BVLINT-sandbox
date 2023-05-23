import { AfterViewInit, Component } from '@angular/core';
import { animate, stagger } from 'motion';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss'],
})
export class TechComponent implements AfterViewInit {
  constructor() {}

  ngAfterViewInit(): void {
    animate(
      '.list-item',
      { x: 200 },
      {
        delay: stagger(0.1),
        duration: 0.5,
        easing: [0.22, 0.03, 0.26, 1],
      }
    );
  }
}
