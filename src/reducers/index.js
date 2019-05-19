import { combineReducers } from "redux";
import { reducer as form } from 'redux-form';
import { connectRouter } from 'connected-react-router';
import user from './userReducer';
import login from './loginReducer';
import profile from './profileReducer';
import registration from './registrationReducer';
import feed from './feedReducer';
import ad from './adReducer';
import pagination from './paginationReducer';

const rootReducer = history => combineReducers({
    router: connectRouter(history),
    form,
    user,
    login,
    registration,
    profile,
    feed,
    ad,
    pagination
});

export default rootReducer;
