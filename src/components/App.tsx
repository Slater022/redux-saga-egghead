import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { CharacterModel } from '../models/character.model';
import { ConnectedProps } from 'react-redux';
import { AppContainer } from '../container/sw.container';
import { InitialSwState } from '../models/sw.model';

type propsFromRedux = ConnectedProps<typeof AppContainer>

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Redux Saga</h1>
                <div>
                    {this.props.starWars.people.map((person, i) => <h4 key={i}>{person.name}</h4>)}
                </div>
                <button onClick={this.props.fetchStarWarsRequest}>Load More</button>
            </div>
        );
    }
}


export default App;
