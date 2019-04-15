import { push, replace } from 'connected-react-router';
import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE, LOGOUT } from '../constants/actionTypes';

const AFTER_LOGIN_PATH = '/';
const AFTER_LOGOUT_PATH = '/login';

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

export const logout = () => dispatch => {
    dispatch(logoutAction());

    dispatch(replace(AFTER_LOGOUT_PATH));
};

const logoutAction = () => ({
    type: LOGOUT
});
