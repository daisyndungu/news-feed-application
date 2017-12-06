import React from 'react';
import {render} from 'react-dom';
import {Router, Route, Switch, browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import configureStore from './store/configureStore'; 
import * as sourceActions from './actions/sourceActions';
import SourcePage from './components/SourcesPage';

const history = createHistory();
const store = configureStore();

store.dispatch(sourceActions.loadSources());

render(
    <Provider store={store}>
        <Router history={history}>
            <Route exact path='/sources' component={SourcePage} />
        </Router>
    </Provider>, document.getElementById('app')
);
