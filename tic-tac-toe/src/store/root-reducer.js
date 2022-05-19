import {combineReducers} from "redux";
import {actionReducer} from './user/action.reducer';

export const rootReducer = combineReducers({
    action: actionReducer
    // ...other reducers
});