import React, { Component } from 'react';
import './App.scss';
import { mapSwDispatch, mapSwState, PropsFromRedux } from '../container/sw.container';
import { connect } from 'react-redux';
import { FETCH_STAR_WARS_REQUEST, SwActionTypes } from '../types/sw.types';


class App extends Component<PropsFromRedux> {


    componentDidUpdate(){
        //store.dispatch(FETCH_STAR_WARS_REQUEST)
    }

    render() {
        return (
            <div>
                <h1>Redux Saga</h1>
                <div>
                    {this.props.starWars.map((person, i) => <h4 key={i}>{person.name}</h4>)}
                </div>
                <button onClick={() => this.props.fetchStarWarsRequest}>Load More</button>
            </div>
        );
    }
}

export default connect( mapSwState, mapSwDispatch)(App);


