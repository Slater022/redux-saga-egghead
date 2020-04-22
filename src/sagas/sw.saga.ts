import { call, put } from 'redux-saga/effects'
import { FETCH_STAR_WARS_SUCCESS, SwActionTypes } from '../types/sw.types';
import { CharactersService } from '../services/characters.service';
import { fetchStarWarsSuccess } from '../actions/sw.actions';


export function* fetchCharacters() {
    try {
        console.log("testing saga");
        const character = yield call(CharactersService.fetchCharactersApi);
        yield put(fetchStarWarsSuccess(character));
    } catch (e) {
        console.log(e);
    }
}
