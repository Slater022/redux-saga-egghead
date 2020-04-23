import { push } from 'connected-react-router'
import { put } from 'redux-saga/effects'
import { RouterActionTypes } from '../router.types';

export function* redirect(path : RouterActionTypes) {
    try {
        console.log("routing saga" );
        console.log( path.payload );
        return yield put(push(path.payload))
    } catch (e) {
        console.log(e);
    }
}
