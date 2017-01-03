import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Col, Card, CardPanel, CardTitle} from 'react-materialize';

import * as actions from '../actions';

import _ from 'lodash';


class PokemonCard extends Component {
  componentWillMount() {
    this.props.fetchPokemon();
  }
  
  renderPokemonCard(pokemon) {
    const sprite_path = "../../sprites/sprites/pokemon/" + pokemon.id + ".png";
    let text = "";
    
    if(pokemon.species && pokemon.species.flavor_text && pokemon.species.flavor_text.flavor_text){
      text = pokemon.species.flavor_text.flavor_text;
    }


    return (
        <Col l={3} m={4} s={6}>
          <Card
            className="lighten-4 black-text"
            header={<CardTitle image={sprite_path}/>}
            title={pokemon.identifier}>
          </Card>
        </Col>
    );
  }

  render() {
    let data = _.values(this.props.pokemon);
    return (
      <div>
        <Row>
          {data.map(this.renderPokemonCard)}
        </Row>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {pokemon: state.pokemon};
}

export default connect(mapStateToProps, actions)(PokemonCard);