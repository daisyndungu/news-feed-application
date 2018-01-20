import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState'

export default function sourceReducer(state = initialState.sources, action){
    switch(action.type) {
        case actionTypes.LOAD_SOURCES_SUCCESS:
            return action.sources;

        default:
            return state;
    }
}