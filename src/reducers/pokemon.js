import {FETCH_POKEMON, FETCH_POKEMON_DETAILS} from '../actions/types'

export default function (state = [], action) {
  switch (action.type){
    case FETCH_POKEMON:
      return action.payload;
    case FETCH_POKEMON_DETAILS:
      return action.payload;
  }
  
  return state;
}