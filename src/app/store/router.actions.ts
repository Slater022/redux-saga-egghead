
import { REDIRECT, RouterActionTypes } from './router.types';

export function redirectRequest (payload: string): RouterActionTypes {
    return {
        type: REDIRECT,
        payload: payload
    }
}


