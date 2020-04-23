import { call, put } from 'redux-saga/effects'
import { starwarsService } from '../../features/starwars/starwars.service';
import { fetchStarWarsSuccess } from '../sw.actions';



export function* fetchCharacters() {
    try {
        console.log("testing saga");
        const character = yield call(starwarsService.fetchCharactersAx);
        yield put(fetchStarWarsSuccess(character));
    } catch (e) {
        console.log(e);
    }
}
