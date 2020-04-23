import { combineReducers } from 'redux'
import { swReducer } from './reducers/sw.reducer';

export const rootReducer = combineReducers({
    swReducer
})

export type RootState = ReturnType<typeof rootReducer>
