import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Apod } from './spacedashboard.interface';

@Component({
  selector: 'app-spacedashboard',
  templateUrl: './spacedashboard.component.html',
  styleUrls: ['./spacedashboard.component.scss'],
})
export class SpacedashboardComponent implements OnInit {
  Apod: Apod | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getAPOD();
  }

  getAPOD() {
    this.http
      .get(
        'https://api.nasa.gov/planetary/apod?api_key=uK5HH7WWn22qEfk2Q7NZTFqD49yk7alwesPM3T3k'
      )
      .subscribe((response) => {
        this.Apod = response as Apod;
        console.log(this.Apod);
      });
  }
}
