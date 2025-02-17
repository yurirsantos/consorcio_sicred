import { combineReducers } from 'redux';
import userReducer from './user/reduce';
import loadingReducer from './loading/reduce';
import sidebarReducer from './sidebar/reduce';

const rootReducer = combineReducers({
    userReducer,
    loadingReducer,
    sidebarReducer
});

export default rootReducer;