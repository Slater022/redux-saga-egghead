// @ts-ignore
import { takeLatest } from 'redux-saga/effects';

import { FETCH_STAR_WARS_REQUEST } from '../sw.types';

import { fetchCharacters } from './sw.saga';
import { redirect } from './router.saga';
import { REDIRECT } from '../router.types';


function* rootSaga() {
    yield takeLatest( FETCH_STAR_WARS_REQUEST, fetchCharacters);
    yield takeLatest( REDIRECT, redirect);
}

export default rootSaga;
