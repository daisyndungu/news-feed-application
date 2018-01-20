//API
import ArticlesApi from '../api/articlesApi';

// actions
import * as actionTypes from './actionTypes';

// action creators
export function loadArticles (source_id){
    return function(dispatch) {
        return ArticlesApi.getAllArtices(source_id).then(articles => {
            dispatch(loadArticlesSuccess(articles))
        }
        ).catch(error => {
            console.log("Wrong source ID");
            throw(error);
          });
    }
}

export function loadArticlesSuccess(articles) {
    return {type: actionTypes.LOAD_ARTICLES_SUCCESS, articles};
}
