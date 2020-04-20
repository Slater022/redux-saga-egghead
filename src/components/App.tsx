import React, { Component } from 'react';
import './App.scss';
import { PropsFromRedux } from '../container/sw.container';

interface Props extends PropsFromRedux {
    backgroundColor: string
}

class App extends Component<Props, {}> {
    render() {
        return (
            <div>
                <h1>Redux Saga</h1>
                <div>
                    {this.props.starWars.map((person, i) => <h4 key={i}>{person.name}</h4>)}
                </div>
                <button onClick={this.props.fetchStarWarsRequest}>Load More</button>
            </div>
        );
    }
}


export default App;
