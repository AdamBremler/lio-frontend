import axios from '../helpers/lioAxiosInstance';
import { POST_AD_REQUEST, POST_AD_SUCCESS, POST_AD_FAILURE, GET_AD_REQUEST, GET_AD_SUCCESS, GET_AD_FAILURE } from '../constants/actionTypes';
import { replace } from 'connected-react-router';

export const postAd = input => async (dispatch, getState) => {
    dispatch(postAdRequest());

    try {
        const { data } = await axios.post('/ads', { ...input }, {
            headers: {
                'Authorization': `Bearer ${getState().user.token}`
            }
        });

        dispatch(postAdSuccess());
        dispatch(replace(`/ads/${data._id}`));
    } catch (e) {
        dispatch(postAdFailure(e.response ? e.response.data.msg : 'Could not post ad'));
    }
}

const postAdRequest = () => ({
    type: POST_AD_REQUEST
});

const postAdSuccess = () => ({
    type: POST_AD_SUCCESS
});

const postAdFailure = error => ({
    type: POST_AD_FAILURE,
    payload: { error }
});

export const getAd = id => async (dispatch, getState) => {
    dispatch(getAdRequest());

    try {
        const { data } = await axios.get(`/ads/${id}`, {
            headers: {
                'Authorization': `Bearer ${getState().user.token}`
            }
        });

        dispatch(getAdSuccess(data.ad));
    } catch (e) {
        dispatch(getAdFailure(e.response ? e.response.data.msg : 'Could not get ad'));
    }
}

const getAdRequest = () => ({
    type: GET_AD_REQUEST
});

const getAdSuccess = ad => ({
    type: GET_AD_SUCCESS,
    payload: { ad }
});

const getAdFailure = error => ({
    type: GET_AD_FAILURE,
    payload: { error }
});
