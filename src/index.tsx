import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Provider } from 'react-redux';
import configureStore from './app/store/app.store';
import {history} from './app/store/_root.reducer';
import RouterComponent from './app/features/router/router.component';
import { ConnectedRouter } from 'connected-react-router';

const store = configureStore();

// @ts-ignore
window.store = store;

ReactDOM.render(
    <Provider store={store}>

            <RouterComponent />

    </Provider>,
    document.getElementById('root')
);
