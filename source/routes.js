import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import {IndexRoute} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

// components
import App from './components/common/App';
import SourcePage from './components/sources/SourcesPage';
import ArticlesPage from './components/articles/ArticlesPage'

export default class Routes extends Component {
    render(){
        return (
            <div>
                <App>
                    <Switch>
                        <Route exact path='/sources' component={SourcePage}/>
                        <Route exact path='/:sourceId' component={ArticlesPage} />
                    </Switch>
                </App>
            </div>
        )
    }
}
