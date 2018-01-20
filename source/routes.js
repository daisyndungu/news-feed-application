import React, { Component } from 'react';
import {Route} from 'react-router';
import {IndexRoute} from 'react-router-dom';

// components
import App from './components/common/App';
import SourcePage from './components/sources/SourcesPage';
import ArticlesPage from './components/articles/ArticlesPage'

export default class Routes extends Component {
    render(){
        return (
            <div>
                <App>
                    <Route exact path='/' component={SourcePage} />
                    <Route path='/:source_id' component={ArticlesPage} />
                </App>
            </div>
        )
    }
}
