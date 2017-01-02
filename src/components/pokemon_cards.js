import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import pokemon from '../../data/charmander.json'

class PokemonCard extends Component {
  renderPokemonCard(pokemon) {
    const sprite_path = "../../sprites/sprites/pokemon/" + pokemon.id + ".png";
    
    return (
      <div className="card card-block">
        <h4>{pokemon.name}</h4>
        <img src={sprite_path} alt=""/>
      </div>
    );
  }

  render() {
    return (
      <div className="pokemon-list">
        {this.renderPokemonCard(pokemon)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {pokemon: state.pokemon};
}

export default connect(mapStateToProps)(PokemonCard);