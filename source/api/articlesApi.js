import React from 'react';
import axios from 'axios';

export default class ArticlesApi {
    
    static getAllArtices(source_id){
        this.apiKey = '213327409d384371851777e7c7f78dfe';
        return axios.get(`https://newsapi.org/v1/articles?source=${source_id}&apiKey=${this.apiKey}`)
        .then(
            response => {
                return response.data.articles;
            })
        .catch(
            error => {
                console.log(error, 'no articles loaded');
                return error;
            }
        )
    }
} 