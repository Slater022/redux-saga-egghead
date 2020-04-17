import * as swFetch from '../types/sw.types'
import { InitialSwState } from '../models/sw.model';
import { FETCH_STAR_WARS_REQUEST, FETCH_STAR_WARS_SUCCESS, SwActionTypes } from '../types/sw.types';

const initialState: InitialSwState = {
    starWars: []
}

// Extract for better readability
const handleStarWarsFetchRequest = (state: InitialSwState, action: SwActionTypes) => {
    // TODO : Correct one
    return {
        ...state,
        starWars: action.payload
    }
}

const handleStarWarsFetchSuccess = (state: InitialSwState, action: SwActionTypes) => {
    return {
        ...state,
        starWars:  action.payload
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
