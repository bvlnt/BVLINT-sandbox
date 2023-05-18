import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';
import { gsap } from 'gsap';

@Component({
  selector: 'app-hackereffect',
  templateUrl: './hackereffect.component.html',
  styleUrls: ['./hackereffect.component.scss'],
})
export class HackereffectComponent implements OnInit, AfterViewInit {
  @ViewChild('title', { static: true }) title!: ElementRef;

  ngAfterViewInit(): void {
    const letters =
      'abcdefghijklmnopqrstuvwxyz1234567890.,-*<>äđĐ[|Äˇ^~˘]{}()@&#łí˙`ł◙⠕⊹⑈☗ ∰ ፨ ☼ ⑇⊹⍜⤿☼╫§╜φ°⌂▌⛢٥≈ტ◊◙⠕⊹⑈☗ ∰ ፨ ☼ ⑇⊹⍜⤿☼╫§╜φ°⌂▌⛢٥≈ტ◊◙⠕⊹⑈☗ ∰ ፨ ☼ ⑇⊹⍜⤿☼╫§╜φ°⌂▌⛢٥≈ტ◊';
    const titleEl = this.title.nativeElement;
    const desc = document.querySelector('#desc');
    const targetText = titleEl.dataset.value;

    const mouseover$ = fromEvent(titleEl, 'mouseover');

    const titleAnimation = gsap.from(titleEl, {
      opacity: 0,
      x: -200,
      duration: 1,
      ease: 'power3.in',
    });
    const descAnimation = gsap.from(desc, {
      opacity: 0,
      x: -200,
      duration: 2,
      ease: 'power3.in',
    });

    const effect$ = mouseover$.pipe(
      map(() => {
        // currentText is the init text, I randomly init one that matches the target length
        let currentText = '';
        for (let i = 0; i < targetText.length; i++) {
          currentText += letters[Math.floor(Math.random() * letters.length)];
        }

        //iterations and duration to make the effect look desirable
        let iteration = -5;
        const maxIterations = targetText.length * 3;
        const duration = 750;

        return interval(duration / maxIterations).pipe(
          takeWhile(() => iteration < maxIterations),
          map(() => {
            const nextChar =
              letters[Math.floor(Math.random() * letters.length)];
            currentText = currentText.substring(1) + nextChar;

            //updating the text with the target character in the current index
            const updatedText = currentText
              .split('')
              .map((char, i) => {
                if (i >= iteration) {
                  return char;
                }
                return targetText.charAt(i);
              })
              .join('');

            iteration++;

            return updatedText;
          })
        );
      })
    );

    effect$.subscribe((text$) => {
      text$.subscribe((text) => (titleEl.innerText = text));
    });
  }

  ngOnInit(): void {
    //blurry blob that follows the mouse in the background
    const blob: HTMLElement | null = document.getElementById('blob');

    if (blob) {
      document.body.onpointermove = (event: PointerEvent) => {
        const { clientX, clientY } = event;

        blob.animate(
          {
            left: `${clientX}px`,
            top: `${clientY}px`,
          },
          { duration: 3000, fill: 'forwards' }
        );
      };
    }
  }
}
