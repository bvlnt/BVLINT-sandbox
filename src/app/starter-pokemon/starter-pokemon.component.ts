import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-starter-pokemon',
  templateUrl: './starter-pokemon.component.html',
  styleUrls: ['./starter-pokemon.component.scss'],
})
export class StarterPokemonComponent implements OnInit {
  starterPokemon: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('https://pokeapi.co/api/v2/pokemon?limit=36')
      .subscribe((response: any) => {
        this.starterPokemon = response.results.map(
          (pokemon: any, index: number) => {
            return {
              name: pokemon.name,
              imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                index + 1
              }.png`,
            };
          }
        );
      });
  }
}
