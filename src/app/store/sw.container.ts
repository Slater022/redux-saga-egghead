import { connect, ConnectedProps } from 'react-redux'
import { RootState } from './_root.reducer';
import { fetchStarWarsRequest, fetchStarWarsSuccess } from './sw.actions';


export const mapSwState = (state: RootState) => ({
    starwars: state.swReducer.starwars
})

export const mapSwDispatch = {
    fetchStarWarsRequest: () => fetchStarWarsRequest(),
    fetchStarWarsSuccess: (payload: []) => fetchStarWarsSuccess(payload),
}

export const AppContainer = connect(mapSwState, mapSwDispatch);

export type PropsFromRedux = ConnectedProps<typeof AppContainer>

