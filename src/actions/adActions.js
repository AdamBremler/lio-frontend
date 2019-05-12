import axios from '../helpers/lioAxiosInstance';
import { reset } from 'redux-form';
import { POST_AD_REQUEST, POST_AD_SUCCESS, POST_AD_FAILURE } from '../constants/actionTypes';

export const postAd = input => async (dispatch, getState) => {
    dispatch(postAdRequest());

    try {
        const res = await axios.post('/ad', { ...input }, {
            headers: {
                'Authorization': `Bearer ${getState().user.token}`
            }
        });

        dispatch(reset('createAd'));
        dispatch(postAdSuccess());
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
