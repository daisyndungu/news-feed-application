import React from 'react';
import {render} from 'react-dom';
import {Router, Route, Switch, browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import configureStore from './store/configureStore'; 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Components
import SourcePage from './components/sources/SourcesPage';

// action
import * as sourceActions from './actions/sourceActions';

// Routes
import Routes from './routes'

const history = createHistory();
const store = configureStore();

store.dispatch(sourceActions.loadSources());

render(
    <Provider store={store}>
        <Router history={history}>
            <MuiThemeProvider>
                <Routes />
            </MuiThemeProvider>      
        </Router>
    </Provider>, document.getElementById('app')
);

export default  history;