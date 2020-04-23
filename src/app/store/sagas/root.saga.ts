// @ts-ignore
import { takeLatest } from 'redux-saga/effects';

import { FETCH_STAR_WARS_REQUEST } from '../sw.types';

import { fetchCharacters } from './sw.saga';


function* rootSaga() {
    yield takeLatest( FETCH_STAR_WARS_REQUEST, fetchCharacters);
}

export default rootSaga;
