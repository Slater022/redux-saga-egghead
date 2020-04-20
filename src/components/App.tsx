import React, { Component } from 'react';
import './App.scss';
import { mapSwDispatch, mapSwState, PropsFromRedux } from '../container/sw.container';
import { connect, useDispatch, useStore } from 'react-redux';
import { FETCH_STAR_WARS_REQUEST, SwActionTypes } from '../types/sw.types';
import { fetchStarWarsRequest } from '../actions/sw.actions';
import { InitialSwState } from '../models/sw.model';
import { CharacterModel } from '../models/character.model';

/*
function App({fetchStarWarsRequest, starWars = []}:PropsFromRedux) {
      return (
        <div>
            <h1>Redux Saga</h1>
            <div>
                {starWars.map((person, i) => <h4 key={i}>{person.name}</h4>)}
            </div>
            <button onClick={() => fetchStarWarsRequest}>Load More</button>
        </div>
    );
}
//*/
//*
class App extends Component<PropsFromRedux> {
    static defaultProps = new InitialSwState();

    componentDidMount(){
    }

    render() {
        return (
            <div>
                <h1>Redux Saga</h1>
                <div>
                    {this.props.starWars.map((person : CharacterModel, i) => <h4 key={i}>{person.name}</h4>)}
                </div>
                <button onClick={() => this.props.fetchStarWarsRequest}>Load More</button>
            </div>
        );
    }
}

 //*/

export default connect( mapSwState, mapSwDispatch)(App);


