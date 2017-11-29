import React, { Component } from 'react';
import axios from 'axios';
import {Card, CardHeader, CardTitle, CardText, CardMedia} from 'material-ui';

export default class Article extends React.Component {
    constructor(props){
        super(props)
        this.apiKey = '213327409d384371851777e7c7f78dfe';
        this.sourceId = this.props.match.params.sourceId
        this.state = {
            articles: []
        }
    }
    componentDidMount() {
        axios.get(`https://newsapi.org/v1/articles?source=${this.sourceId}&apiKey=${this.apiKey}`)
        .then(res => {
            const articles = res.data.articles.map(articles => articles);
            this.setState({ articles });
            
        });
    }
    render(){
        return (
            <div><h1> {this.sourceId} </h1>
                { this.state.articles.map( article =>
                    <div key={article.title}>
                    <h5>{article.title}</h5>
                    <p> {article.description}</p>
                    </div>
                )}
            </div>
        );
    }
}