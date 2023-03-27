import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-starter-pokemon',
  templateUrl: './starter-pokemon.component.html',
  styleUrls: ['./starter-pokemon.component.scss'],
})
export class StarterPokemonComponent implements OnInit {
  starterPokemon: any[] = [];
  selectedPokemon: any;

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
            name: `${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.slice(
              1
            )}`,
            imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              pokemon.url.split('/')[6]
            }.png`,
            evolutionImageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              parseInt(pokemon.url.split('/')[6]) + 2
            }.png`,
          };
        });
      });
  }

  showEvolution(pokemon: any) {
    if (!this.selectedPokemon || this.selectedPokemon.name !== pokemon.name) {
      this.selectedPokemon = pokemon;
    } else {
      this.hideEvolution();
    }
  }

  hideEvolution() {
    this.selectedPokemon = null;
  }
}
