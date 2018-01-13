import { combineReducers } from 'redux';
import sources from './sourceReducer';
import articles from './articleReducer';

// combines all reducers to be passed to the store
const rootReducer = combineReducers({
    sources,
    articles
});
export default rootReducer;