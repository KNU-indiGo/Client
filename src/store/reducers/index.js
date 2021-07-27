import { combineReducers } from "redux";
import set from './set'
import change from './change';

const rootReducer = combineReducers({
    set, change,
});

export default rootReducer;