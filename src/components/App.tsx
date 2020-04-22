import React from 'react';
import { connect } from 'react-redux';
import './App.scss';
import { mapSwDispatch, mapSwState, PropsFromRedux } from '../container/sw.container';

export const App = ({ fetchStarWarsRequest, starWars = [] }: PropsFromRedux) => (
    <div>
        <h1>Redux Saga</h1>
        <div>
            {starWars.map((person, i) => <h4 key={i}>{person.name}</h4>)}
        </div>
        <button onClick={fetchStarWarsRequest}>Load More</button>
    </div>
);

export default connect(mapSwState, mapSwDispatch)(App);


