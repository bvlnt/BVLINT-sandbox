import { Component, OnInit } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';

@Component({
  selector: 'app-mypinterestgallery',
  templateUrl: './mypinterestgallery.component.html',
  styleUrls: ['./mypinterestgallery.component.scss'],
})
export class MypinterestgalleryComponent implements OnInit {
  constructor() {}

  //https://www.youtube.com/watch?v=Jt3A2lNN2aE todo holnapra

  ngOnInit(): void {
    const images = document.getElementsByClassName('image');
  }
}
