import { connect, ConnectedProps } from 'react-redux'
import App from '../components/App'
import { InitialSwState } from '../models/sw.model';
import { fetchStarWarsRequest, fetchStarWarsSuccess } from '../actions/sw.actions';

export const mapSwState = (state: InitialSwState) => ({
    starWars : state.starWars
})

export const mapSwDispatch = {
    fetchStarWarsRequest: fetchStarWarsRequest(),
    fetchStarWarsSuccess: fetchStarWarsSuccess(),
}

export const AppContainer = connect(mapSwState, mapSwDispatch);

export type PropsFromRedux = ConnectedProps<typeof AppContainer>
