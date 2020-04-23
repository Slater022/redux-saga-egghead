import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect, withRouter } from 'react-router-dom'
import AppComponent from '../../app.component';
import StarwarsComponent from '../starwars/starwars.component';
import { ConnectedRouter, goBack } from 'connected-react-router';
import { connect, ConnectedProps, Provider } from 'react-redux';
import { history, RootState } from '../../store/_root.reducer';
import { redirectRequest } from '../../store/router.actions';


export const mapRouterState = (state: RootState) => ({
    router: state.router,
    location: state.router.location.pathname
})

export const mapRouterDispatch = {
    redirectRequest: (payload: string) => redirectRequest(payload),
}

export const RouterContainer = connect(mapRouterState, mapRouterDispatch);

export type PropsForRouter = ConnectedProps<typeof RouterContainer>

const RouterComponent = ({redirectRequest, router, location}: PropsForRouter) => {
    return (
        <ConnectedRouter history={history}>
            <Router>
                <div>
                    <span>Current pathname: {location}</span>
                    <button onClick={() => redirectRequest('/')}>Home</button>
                    <button onClick={() => redirectRequest('/app')}>App</button>
                    <button onClick={() => redirectRequest('/starwars')}>Starwars</button>
                    <button onClick={() => goBack()}>Go Back</button>
                </div>
                <Switch>
                    <Route exact path="/" component={AppComponent} />
                    <Route exact path="/starwars" component={StarwarsComponent} />
                    <Route exact path="/app" component={AppComponent} />
                    <Redirect to="/" />
                </Switch>
            </Router>
        </ConnectedRouter>)
}

export default connect(mapRouterState, mapRouterDispatch)(RouterComponent)
