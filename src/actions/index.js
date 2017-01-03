import {FETCH_POKEMON} from './types'

import pokemon from '../../data/pokemon.json'

export function fetchPokemon() {
  return {
    type: FETCH_POKEMON,
    payload: {
      pokemon: pokemon,
    }
  }
}