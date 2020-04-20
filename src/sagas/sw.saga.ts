import { call, put } from 'redux-saga/effects'
import { FETCH_STAR_WARS_SUCCESS, SwActionTypes } from '../types/sw.types';
import { CharactersService } from '../services/characters.service';


export function* fetchCharacters() {
    try {
        const character = yield call(CharactersService.fetchCharactersApi);
        yield put({type: FETCH_STAR_WARS_SUCCESS, payload: character});
    } catch (e) {
        console.log(e);
    }
}
