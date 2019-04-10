import { combineReducers } from "redux";
import { reducer as form } from 'redux-form';
import user from './userReducer';
import registration from './registrationReducer';

const rootReducer = combineReducers({
    form,
    user,
    registration
});

export default rootReducer;
