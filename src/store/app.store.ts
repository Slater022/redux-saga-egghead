import { createStore } from 'redux'
import { rootReducer } from '../reducers/_root.reducer';


export const store = createStore(rootReducer)
