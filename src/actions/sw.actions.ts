import { FETCH_STAR_WARS_REQUEST, FETCH_STAR_WARS_SUCCESS, SwActionTypes } from '../types/sw.types';

export function fetchStarWarsRequest (): SwActionTypes {
    return {
        type: FETCH_STAR_WARS_REQUEST,
        payload: []
    }
}

export function fetchStarWarsSuccess (): SwActionTypes {
    return {
        type: FETCH_STAR_WARS_SUCCESS,
        payload: []
    }
}


