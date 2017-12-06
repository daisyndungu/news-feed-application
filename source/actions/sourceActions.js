import SourceApi from '../api/sourcesApi';
import * as actionTypes from './actionTypes';

// action creators
export function loadSources (){
    return function(dispatch) {
        return SourceApi.getAllSources().then(sources => {
            dispatch(loadSourcesSuccess(sources));
        }
        ).catch(error => {
            throw(error);
          });
    }
}
export function loadSourcesSuccess(sources) {
    return {type: actionTypes.LOAD_SOURCES_SUCCESS, sources};
  }