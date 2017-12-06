import React from 'react';
import axios from 'axios';
import { error } from 'util';

class SourceApi {
    static getAllSources(){
        return axios.get(`https://newsapi.org/v1/sources?language=en`)
        .then(response =>{
            return response.data.sources;
        }).catch(error => {
            console.log(error, 'an error occured in api');
            return error
        }
        )
    }
}

export default SourceApi;