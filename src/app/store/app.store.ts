import { createStore , applyMiddleware} from 'redux'
import { rootReducer } from './_root.reducer';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/root.saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';

import {history } from './_root.reducer';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
    const middleware = [sagaMiddleware, routerMiddleware(history)];
    const middleWareEnhancer = applyMiddleware(...middleware);

    const store = createStore(
        rootReducer,
        composeWithDevTools(middleWareEnhancer)
    );
    sagaMiddleware.run(rootSaga);

    return store;
}







