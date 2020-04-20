import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from '../reducers/_root.reducer';

import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/root.saga';
import { composeWithDevTools } from 'redux-devtools-extension';

// Application du middleware saga au store redux


/*
// Without Saga
export default function configureStore() {
    const store = createStore(
        rootReducer,
        composeWithDevTools()
    );

    return store;
}
//*/


//*
const sagaMiddleware = createSagaMiddleware();
export default function configureStore() {
    const middleware = [sagaMiddleware];
    const middleWareEnhancer = applyMiddleware(...middleware);

    const store = createStore(
        rootReducer,
        composeWithDevTools(middleWareEnhancer)
    );
    sagaMiddleware.run(rootSaga);

    return store;
}
//*/






