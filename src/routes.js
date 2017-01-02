import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app'
import PokemonCards from './components/pokemon_cards'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PokemonCards}/>
  </Route>
);