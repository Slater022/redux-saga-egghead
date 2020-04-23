import * as swFetch from '../sw.types'
import { InitialSwState } from '../../model/sw.model';
import { FETCH_STAR_WARS_REQUEST, FETCH_STAR_WARS_SUCCESS, SwActionTypes } from '../sw.types';

const initialState: InitialSwState = {
    starwars: []
}

// Extract for better readability
const handleStarWarsFetchRequest = (state: InitialSwState, action: SwActionTypes) => {
    // TODO : Correct one
    return {
        ...state,
        starwars: action.payload
    }
}

const handleStarWarsFetchSuccess = (state: InitialSwState, action: SwActionTypes) => {
    return {
        ...state,
        starwars: action.payload
    }
}

// Actual Reducer
export function swReducer(
    state = initialState,
    action: SwActionTypes
): InitialSwState {
    switch (action.type) {
        case FETCH_STAR_WARS_REQUEST: {
            return handleStarWarsFetchRequest(state, action);
        }
        case FETCH_STAR_WARS_SUCCESS: {
            return handleStarWarsFetchSuccess(state, action);
        }
        default:
            return state
    }
}
