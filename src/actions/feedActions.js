import axios from '../helpers/lioAxiosInstance';
import { GET_FEED_REQUEST, GET_FEED_SUCCESS, GET_FEED_FAILURE } from '../constants/actionTypes';

export const getFeed = () => async (dispatch, getState) => {
    dispatch(getFeedRequest());

    try {
        const { data } = await axios.get('/feed', {
            headers: {
                'Authorization': `Bearer ${getState().user.token}`
            }
        });

        dispatch(getFeedSuccess(data));
    } catch (e) {
        dispatch(getFeedFailure(e.response ? e.response.data.msg : 'Could not load feed'));
    }
}

const getFeedRequest = () => ({
    type: GET_FEED_REQUEST
});

const getFeedSuccess = feed => ({
    type: GET_FEED_SUCCESS,
    payload: { feed }
});

const getFeedFailure = error => ({
    type: GET_FEED_FAILURE,
    payload: { error }
});
