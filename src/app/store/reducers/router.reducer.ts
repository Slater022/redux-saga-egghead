import { REDIRECT, RouterActionTypes } from '../router.types';

class RouterState {
    n = 0;
}

const initialState = new RouterState();

const handleRedirect = (state: RouterState, action: RouterActionTypes) => {
    console.log('reducer router');
    return {
        ...state,
        n : state.n+1,
    }
}

// Actual Reducer
export function routerReducer(
    state = initialState,
    action: RouterActionTypes
): RouterState {
    switch (action.type) {
        case REDIRECT: {
            return handleRedirect(state, action);
        }
        default:
            return state
    }
}
