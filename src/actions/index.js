import {FETCH_POKEMON, FETCH_POKEMON_DETAILS} from './types'
import Axios from 'axios';

export function fetchAllPokemon() {
  let pokemon = Axios.get("http://localhost:3000/pokemon");
  
  return {
    type: FETCH_POKEMON,
    payload: pokemon
  }
}

export function fetchPokemon(id) {
  let pokemon = Axios.get(`http://localhost:3000/pokemon/${id}`);
  
  return {
    type: FETCH_POKEMON_DETAILS,
    payload: pokemon
  };
}