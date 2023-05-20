import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss'],
})
export class TechComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    gsap.from('.box-1', {
      duration: 1,
      ease: 'power1.inOut',
      x: -200,
    });
  }
}
