import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Provider } from 'react-redux';
import configureStore from './app/store/app.store';
import AppComponent from './app/app.component';

const store = configureStore();

// @ts-ignore
window.store = store;

ReactDOM.render(
    <Provider store={store}>
        <AppComponent />
    </Provider>,
    document.getElementById('root')
);
