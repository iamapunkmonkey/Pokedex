import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Col} from 'react-materialize';

import * as actions from '../actions';
import _ from 'lodash';

class PokemonDetails extends Component {
  componentWillMount() {
    this.props.fetchPokemon(this.props.params.id);
  }

  renderDetails() {
    if (!this.props.pokemon.species ||
      !this.props.pokemon.species.flavor_text)
      return <p/>;

    return <p>{this.props.pokemon.species.flavor_text.flavor_text.replace('.', '. ')}</p>
  }

  renderStats() {
    if (!this.props.pokemon.stats)
      return <p/>;

    return (
      <ul>
        {this.renderStat()}
      </ul>
    )
  }

  renderStat() {
    return this.props.pokemon.stats.map((stat) => {
      return (
        <li>
          {stat.stat.identifier} - {stat.base_stat}
        </li>
      )
    });
  }

  render() {
    const sprite_path = "../../sprites/sprites/pokemon/other-sprites/official-artwork/" + this.props.pokemon.id + ".png";

    return (
      <div id="pokemon-details">
        <Row>
          <Col offset="l3" l={6} m={6} s={12}>
            <img src={sprite_path}/>
            <h3>{this.props.pokemon.identifier}</h3>
            {this.renderDetails()}
            {this.renderStats()}
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