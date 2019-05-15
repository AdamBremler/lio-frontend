import { push, replace } from 'connected-react-router';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE, LOGOUT, CLEAR_PROFILE } from '../constants/actionTypes';
import { AFTER_LOGIN_PATH, AFTER_LOGOUT_PATH } from '../constants/paths';

export const register = user => dispatch => {
    dispatch(registerRequest());

    fetch(`${process.env.REACT_APP_API_URL}/users/register`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json()
            .then(data => ({ res, data }))
        )
        .then(({ res, data }) => {
            if (!res.ok) {
                throw data;
            }

            return data;
        })
        .then(({ token, user }) => {
            dispatch(registerSuccess(token, user));
            dispatch(push(AFTER_LOGIN_PATH));
        })
        .catch(e => dispatch(registerFailure(e.msg ? e.msg : 'Could not register')));
}

const registerRequest = () => ({
    type: REGISTER_REQUEST
});

const registerSuccess = (token, user) => ({
    type: REGISTER_SUCCESS,
    payload: {
        token,
        user
    }
});

const registerFailure = error => ({
    type: REGISTER_FAILURE,
    payload: { error }
});

export const login = user => dispatch => {
    dispatch(loginRequest());

    fetch(`${process.env.REACT_APP_API_URL}/users/login`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json()
            .then(data => ({ res, data }))
        )
        .then(({ res, data }) => {
            if (!res.ok) {
                throw data;
            }

            return data;
        })
        .then(({ token, user }) => {
            dispatch(loginSuccess(token, user));
            dispatch(push(AFTER_LOGIN_PATH));
        })
        .catch(e => dispatch(loginFailure(e.msg ? e.msg : 'Could not login')));
}

const loginRequest = () => ({
    type: LOGIN_REQUEST
});

const loginSuccess = (token, user) => ({
    type: LOGIN_SUCCESS,
    payload: {
        token,
        user
    }
});

const loginFailure = error => ({
    type: LOGIN_FAILURE,
    payload: { error }
});

export const logout = () => dispatch => {
    dispatch(logoutAction());
    dispatch({ type: CLEAR_PROFILE })
    dispatch(replace(AFTER_LOGOUT_PATH));
};

const logoutAction = () => ({
    type: LOGOUT
});
