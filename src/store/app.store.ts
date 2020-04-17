import { createStore , applyMiddleware} from 'redux'
import { rootReducer } from '../reducers/_root.reducer';

import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/root.saga';

// Application du middleware saga au store redux

const sageMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer,
    applyMiddleware(sageMiddleware)
);

sageMiddleware.run(rootSaga);
