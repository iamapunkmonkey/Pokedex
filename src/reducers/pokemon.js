import {FETCH_POKEMON} from '../actions/types'

export default function (state = [], action) {
  switch (action.type){
    case FETCH_POKEMON:
      return action.payload.pokemon;
  }
  
  return state;
}