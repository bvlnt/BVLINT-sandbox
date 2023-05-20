import { AfterViewInit, Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import Draggable from 'gsap/Draggable';
import ScrollTrigger from 'gsap/ScrollTrigger';

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

//WORKING GSAP SCROLLTRIGGER:

// import { Component, HostListener, OnInit } from '@angular/core';
// import { gsap } from 'gsap';
// import Draggable from 'gsap/Draggable';
// import ScrollTrigger from 'gsap/ScrollTrigger';

// @Component({
//   selector: 'my-app',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })
// export class AppComponent implements OnInit {
//   constructor() {}

//   ngOnInit() {
//     gsap.registerPlugin(ScrollTrigger, Draggable);

//     this.initScrollTriggers();
//   }

//   initScrollTriggers() {
//     document.querySelectorAll('.box').forEach((box) => {
//       const scrollBox = gsap.timeline({
//         scrollTrigger: {
//           trigger: box,
//           pin: true,
//           start: 'top top',
//           end: 'bottom bottom',
//           markers: true,
//           toggleActions: 'play none none reverse',
//         },
//       });
//       scrollBox.from(box, { y: 30, opacity: 0 });
//     });
//   }
// }
