import { connect } from 'react-redux'
import App from '../components/App'
import { InitialSwState } from '../models/sw.model';
import { fetchStarWarsRequest, fetchStarWarsSuccess } from '../actions/sw.actions';

const mapState = (state: InitialSwState) => ({
    starWars : state.starWars
})

const mapDispatch = {
    fetchStarWarsRequest: fetchStarWarsRequest(),
    fetchStarWarsSuccess: fetchStarWarsSuccess(),
}

export const AppContainer :any = connect(mapState, mapDispatch)(App);

