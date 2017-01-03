import React, { Component } from 'react';
import PokemonCards from './pokemon_cards';
import {Navbar, NavItem} from 'react-materialize';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar brand="Pokedex"/>
        <PokemonCards/>
      </div>
    );
  }
}
