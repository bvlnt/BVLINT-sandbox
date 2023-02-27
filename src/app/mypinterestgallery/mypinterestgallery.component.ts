import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mypinterestgallery',
  templateUrl: './mypinterestgallery.component.html',
  styleUrls: ['./mypinterestgallery.component.scss'],
})
export class MypinterestgalleryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const images = document.querySelectorAll('#my-gallery .image');
    const title = document.querySelector('#my-gallery .title') as any;

    let globalIndex = 0;
    let last = { x: 0, y: 0 };

    const activate = (image: any, x: number, y: number) => {
      image.style.left = `${x}px`;
      image.style.top = `${y}px`;

      image.dataset.status = 'active';

      image.style.zIndex = `${globalIndex}`;
      title.style.zIndex = `${globalIndex + 1}`;

      last = { x, y };
    };

    const distanceFromLast = (x: number, y: number) => {
      return Math.hypot(x - last.x, y - last.y);
    };

    window.onmousemove = (e: MouseEvent) => {
      if (distanceFromLast(e.clientX, e.clientY) > 100) {
        const lead = images[globalIndex % images.length] as any;
        const tail = images[(globalIndex - 5) % images.length] as any;

        console.log(tail);

        activate(lead, e.clientX, e.clientY);

        if (tail) tail.dataset.status = 'inactive';

        globalIndex++;
      }
    };
  }
}
