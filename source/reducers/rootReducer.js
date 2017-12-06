import { combineReducers } from 'redux';
import sources from './sourceReducer';

// combines all reducers to be passed to the store
const rootReducer = combineReducers({
    sources
});
export default rootReducer;