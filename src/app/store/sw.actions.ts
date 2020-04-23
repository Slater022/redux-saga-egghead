import { FETCH_STAR_WARS_REQUEST, FETCH_STAR_WARS_SUCCESS, SwActionTypes } from './sw.types';


export function fetchStarWarsRequest (): SwActionTypes {
    return {
        type: FETCH_STAR_WARS_REQUEST,
        payload: []
    }
}

export function fetchStarWarsSuccess (payload : []): SwActionTypes {
    return {
        type: FETCH_STAR_WARS_SUCCESS,
        payload: payload
    }
}

