import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import { Provider } from 'react-redux';
import configureStore from './store/app.store';

const store = configureStore();

// @ts-ignore
window.store = store;

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
