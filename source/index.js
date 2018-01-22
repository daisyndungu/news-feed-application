import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import {Route, Switch, Router} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import configureStore from './store/configureStore'; 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Components
import Loging from './components/login/Login';

// action
import * as sourceActions from './actions/sourceActions';

// Routes
import Routes from './routes';
import Login from './components/login/Login'

const history = createHistory();
const store = configureStore();

store.dispatch(sourceActions.loadSources());

function requireAuth() {
    if (!localStorage.getItem('access_token')) {
        history.push('/')
    }
  }

function redirectHome(){
    if (localStorage.getItem('access_token') && location.pathname == '/') {
        history.push('/sources')
    }
}
 
render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route exact={true} path='/' component={Login} onEnter={redirectHome()}/>
                    <MuiThemeProvider>
                        <Routes onEnter={requireAuth()}/>
                </MuiThemeProvider>
            </Switch>
        </Router>
    </Provider>, document.getElementById('app')
);

export default  history;