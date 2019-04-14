import { push } from 'connected-react-router';
import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from '../constants/actionTypes';

const AFTER_LOGIN_PATH = '/';

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
        .then(res => {
            if (!res.ok) {
                throw res.statusText;
            }

            return res;
        })
        .then(res => res.json())
        .then(({ token, user }) => {
            dispatch(registerSuccess(token, user));
            dispatch(push(AFTER_LOGIN_PATH));
        })
        .catch(e => dispatch(registerFailure(e)));
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
