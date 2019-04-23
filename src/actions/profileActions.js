import { replace } from 'connected-react-router';
import { GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS, GET_PROFILE_FAILURE } from '../constants/actionTypes';
import { NOT_FOUND_REDIRECT_PATH } from '../constants/paths';

export const getProfile = id => dispatch => {
    dispatch(getProfileRequest());

    fetch(`${process.env.REACT_APP_API_URL}/users/${id}`)
        .then(res => res.json()
            .then(data => ({ res, data }))
        )
        .then(({ res, data }) => {
            if (!res.ok) {
                throw data;
            }

            return data;
        })
        .then(({ user }) => {
            dispatch(getProfileSuccess(user));
        })
        .catch(e => {
            dispatch(getProfileFailure(e.msg ? e.msg : 'Could not get profile'));
            dispatch(replace(NOT_FOUND_REDIRECT_PATH));
        });
}

const getProfileRequest = () => ({
    type: GET_PROFILE_REQUEST
});

const getProfileSuccess = user => ({
    type: GET_PROFILE_SUCCESS,
    payload: { user }
});

const getProfileFailure = error => ({
    type: GET_PROFILE_FAILURE,
    payload: { error }
});
