import { connect, ConnectedProps } from 'react-redux'
import App from '../components/App'
import { RootState } from '../reducers/_root.reducer';
import { fetchStarWarsRequest, fetchStarWarsSuccess } from '../actions/sw.actions';

export const mapSwState = (state: RootState) => ({
    starWars : state.swReducer.starWars
})

export const mapSwDispatch = {
    fetchStarWarsRequest: () => fetchStarWarsRequest(),
    fetchStarWarsSuccess: () => fetchStarWarsSuccess(),
}

export const AppContainer = connect(mapSwState, mapSwDispatch);

export type PropsFromRedux = ConnectedProps<typeof AppContainer>
