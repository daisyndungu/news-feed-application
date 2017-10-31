import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/login';
import Sources from './components/sources';
import Articles from './components/articles';
import {Router, Link, Route, Switch, Provider} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();

ReactDOM.render(
        <Router history={history}>
            <Switch>
                <Route exact path='/' component={ Login } />
                <Route exact path='/home' component={ Sources } />
                <Route exact path='/:sourceId/articles' component={ Articles } />       
            </Switch>
        </Router>, document.getElementById('app')
);

export default history