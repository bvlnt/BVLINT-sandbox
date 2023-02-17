import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-hackereffect',
  templateUrl: './hackereffect.component.html',
  styleUrls: ['./hackereffect.component.scss'],
})
export class HackereffectComponent implements OnInit {
  @ViewChild('title', { static: true }) title!: ElementRef;

  ngOnInit(): void {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const titleEl = this.title.nativeElement;
    const targetText = titleEl.dataset.value;

    const mouseover$ = fromEvent(titleEl, 'mouseover');
    const effect$ = mouseover$.pipe(
      map(() => {
        let currentText = 'ASDFGH';
        let iteration = -1;
        const maxIterations = targetText.length * 3;
        const duration = 1000;

        return interval(duration / maxIterations).pipe(
          takeWhile(() => iteration < maxIterations),
          map(() => {
            iteration++;
            const nextChar =
              letters[Math.floor(Math.random() * letters.length)];
            currentText = currentText.substr(1) + nextChar;
            const updatedText = currentText
              .split('')
              .map((char, i) => {
                if (i >= iteration) {
                  return char;
                }
                return targetText.charAt(i);
              })
              .join('');
            return updatedText;
          })
        );
      })
    );

    effect$.subscribe((text$) => {
      text$.subscribe((text) => (titleEl.innerText = text));
    });
  }
}
