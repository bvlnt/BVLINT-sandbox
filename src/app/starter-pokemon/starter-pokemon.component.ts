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
    const pokemonList = ['squirtle', 'charmander', 'bulbasaur'];
    this.http
      .get('https://pokeapi.co/api/v2/pokemon?limit=50')
      .subscribe((response: any) => {
        const filteredPokemon = response.results.filter((pokemon: any) => {
          return pokemonList.includes(pokemon.name);
        });
        this.starterPokemon = filteredPokemon.map((pokemon: any) => {
          return {
            name: pokemon.name,
            imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              pokemon.url.split('/')[6]
            }.png`,
          };
        });
      });
  }
}
