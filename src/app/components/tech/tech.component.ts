import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { animate, stagger } from 'motion';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss'],
})
export class TechComponent implements AfterViewInit {
  private animated = false;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust this value as per your needs
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !this.animated) {
          this.animateListItems();
          this.animated = true;
          observer.unobserve(entry.target);
        }
      });
    }, options);

    const listItemElements =
      this.elementRef.nativeElement.querySelectorAll('.list-item');
    listItemElements.forEach((item: Element) => observer.observe(item));
  }

  animateListItems(): void {
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
