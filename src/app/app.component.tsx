import React, { Component } from 'react';
import { connect } from 'react-redux';
import './app.scss';
import { mapSwDispatch, mapSwState } from './store/sw.container';
import StarwarsComponent from './features/starwars/starwars.component';

function AppComponent() {
    return (
        <div className="App">
            <header className="App-header">
                <StarwarsComponent />
            </header>
        </div>
    );
}

export default connect(mapSwState, mapSwDispatch)(AppComponent);


