import { FETCH_STAR_WARS_REQUEST, FETCH_STAR_WARS_SUCCESS, SwActionTypes } from '../types/sw.types';
import { CharacterModel } from '../models/character.model';

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


