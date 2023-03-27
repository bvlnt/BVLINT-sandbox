import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Coffee } from './coffee.interface';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.scss'],
})
export class CoffeeComponent implements OnInit {
  coffees: Coffee[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getCoffees();
    console.log(this.coffees);
  }

  getCoffees() {
    this.http
      .get('https://api.sampleapis.com/coffee/hot')
      .subscribe((response) => {
        this.coffees = response as Coffee[];
      });
  }
}
