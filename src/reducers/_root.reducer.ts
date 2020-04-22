import { combineReducers } from 'redux'
import { swReducer } from './sw.reducer';

export const rootReducer = combineReducers({
    swReducer
})

export type RootState = ReturnType<typeof rootReducer>