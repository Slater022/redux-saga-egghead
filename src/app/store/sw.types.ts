export const FETCH_STAR_WARS_REQUEST = 'FETCH_STAR_WARS_REQUEST'
export const FETCH_STAR_WARS_SUCCESS = 'FETCH_STAR_WARS_SUCCESS'

interface FetchStarWarsRequest {
    type: typeof FETCH_STAR_WARS_REQUEST,
    payload: []
}

interface FetchStarWarsSuccess {
    type: typeof FETCH_STAR_WARS_SUCCESS,
    payload: []
}

export type SwActionTypes = FetchStarWarsRequest | FetchStarWarsSuccess;
