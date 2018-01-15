import React, { Component } from 'react';
import {Route, Switch} from 'react-router';
import SourcePage from './components/sources/SourcesPage';
import ArticlesPage from './components/articles/ArticlesPage'

export default class Routes extends Component {
    render(){
        return (
            <Switch>
                <Route exact path='/' component={SourcePage} />
                <Route path='/:source_id' component={ArticlesPage} />
            </Switch>
        )
    }
}
