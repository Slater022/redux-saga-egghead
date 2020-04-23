import { combineReducers } from 'redux'
import { swReducer } from './reducers/sw.reducer';
import { createBrowserHistory } from 'history'
import { connectRouter } from 'connected-react-router';
import { routerReducer } from './reducers/router.reducer';

export const history = createBrowserHistory();

export const rootReducer = combineReducers({
    router : connectRouter(history),
    routerReducer,
    swReducer
})

export type RootState = ReturnType<typeof rootReducer>
