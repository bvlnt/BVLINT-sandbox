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

  ngOnInit(): void {}

  //get me coffees with ingreadients from an api https://api.sampleapis.com/coffee/hot that I want to display in the html, using http get call
  getCoffees() {}
}
