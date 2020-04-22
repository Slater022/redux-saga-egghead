// @ts-ignore
import { takeLatest } from 'redux-saga/effects';

import { FETCH_STAR_WARS_REQUEST, SwActionTypes } from '../types/sw.types';

import { fetchCharacters } from './sw.saga';


function* rootSaga() {
    yield takeLatest( FETCH_STAR_WARS_REQUEST, fetchCharacters);
}

export default rootSaga;
