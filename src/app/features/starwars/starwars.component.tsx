import React from 'react';
import { mapSwDispatch, mapSwState, PropsFromRedux } from '../../store/sw.container';
import { connect } from 'react-redux';
import { CharacterModel } from '../../model/character.model';

const StarwarsComponent = ({ fetchStarWarsRequest, starwars = [] }: PropsFromRedux) => (
    <div>
        <h1>Redux Saga</h1>
        <div>
            {starwars.map((person : CharacterModel, i) => <h4 key={i}>{person.name}</h4>)}
        </div>
        <button onClick={fetchStarWarsRequest}>Load More</button>
    </div>
);

export default connect(mapSwState, mapSwDispatch)(StarwarsComponent);
