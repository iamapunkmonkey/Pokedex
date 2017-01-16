import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Col} from 'react-materialize';
import {Progress} from 'antd';

import * as actions from '../actions';
import _ from 'lodash';
import 'antd/dist/antd.css';

class PokemonDetails extends Component {
  componentWillMount() {
    this.props.fetchPokemon(this.props.params.id);
  }

  renderDetails() {
    if (!this.props.pokemon.species ||
      !this.props.pokemon.species.flavorText)
      return <p/>;
      
    let flavor_text = _.filter(this.props.pokemon.species.flavorText, function(obj) { return obj.languageid == 9 && obj.versionid == 26 });
    
    if(!flavor_text)
      return <p/>;

    return <p>{flavor_text[0].flavortext.replace('.', '. ')}</p>
  }

  renderStats() {
    if (!this.props.pokemon.pokemonStats)
      return <p/>;

    return (
      <ul>
        {this.renderStat()}
      </ul>
    )
  }

  renderStat() {
    return this.props.pokemon.pokemonStats.map((stat) => {
      let percent = _.ceil((parseInt(stat.basestat) / 255) * 100);
      return (
        <li>
          {stat.stat.identifier} - {stat.basestat}
          <br/>
          <Progress percent={percent} showInfo={false} />
        </li>
      )
    });
  }
  
  renderTypes(){
    if (!this.props.pokemon.pokemonStats)
      return <div/>;

    return this.props.pokemon.pokemonTypes.map((type) => {
      return (
        <div>{type.type.identifier}</div>
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
            {this.renderTypes()}
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