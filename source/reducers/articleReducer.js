import initialState from './initialState';
import * as actionTypes  from '../actions/actionTypes'

export default function articleReducer (state = initialState.articles, action){
    switch(action.type){
        case actionTypes.LOAD_ARTICLES_SUCCESS:
            return action.articles
        default:
            return state;
    }
}