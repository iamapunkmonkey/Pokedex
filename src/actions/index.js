import {FETCH_POKEMON} from './types'

import pokemon from '../../data/pokemon.json'
import pokemonSpecies from '../../data/charmander_species.json';

export function fetchPokemon() {
  return {
    type: FETCH_POKEMON,
    payload: {
      pokemon: pokemon.results,
    }
  }
}