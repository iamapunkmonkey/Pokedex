import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Col, Card, CardPanel, CardTitle} from 'react-materialize';
import {Link} from 'react-router';

import * as actions from '../actions';

import _ from 'lodash';


class PokemonCard extends Component {
  componentWillMount() {
    this.props.fetchAllPokemon();
  }

  renderPokemonCard(pokemon) {
    const sprite_path = "../../sprites/sprites/pokemon/" + pokemon.id + ".png";

    return (
      <Col l={4} m={6} s={12}>
        <Link to={"pokemon/" + pokemon.id}>
          <Card
            className="lighten-4 black-text"
            header={<CardTitle image={sprite_path}/>}
            title={pokemon.identifier} key={pokemon.id}>
          </Card>
        </Link>
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