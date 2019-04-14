import { combineReducers } from "redux";
import { reducer as form } from 'redux-form';
import { connectRouter } from 'connected-react-router';
import user from './userReducer';
import registration from './registrationReducer';

const rootReducer = history => combineReducers({
    router: connectRouter(history),
    form,
    user,
    registration
});

export default rootReducer;
