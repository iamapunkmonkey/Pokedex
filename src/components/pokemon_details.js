import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Col} from 'react-materialize';

import * as actions from '../actions';
import _ from 'lodash';

class PokemonDetails extends Component {
  componentWillMount() {
    this.props.fetchPokemon(this.props.params.id);
  }

  renderDetails(){
    if(!this.props.pokemon.species || 
      !this.props.pokemon.species.flavor_text)
      return <p></p>
    
    return <p>{this.props.pokemon.species.flavor_text.flavor_text.replace('.', '. ')}</p>
  }
  
  render() {
    const sprite_path = "../../sprites/sprites/pokemon/" + this.props.pokemon.id + ".png";

    return (
      <div id="pokemon-details">
        <Row>
          <Col offset="l3" l={6} m={6} s={12}>
            <img src={sprite_path}/>
            <h3>{this.props.pokemon.identifier}</h3>
            {this.renderDetails()}
          </Col>
        </Row>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {pokemon: state.pokemon};
}

export default connect(mapStateToProps, actions)(PokemonDetails);