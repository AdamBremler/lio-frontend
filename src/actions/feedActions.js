import { GET_FEED_REQUEST, GET_FEED_SUCCESS, GET_FEED_FAILURE } from '../constants/actionTypes';

export const getFeed = () => (dispatch, getState) => {
    dispatch(getFeedRequest());

    fetch(`${process.env.REACT_APP_API_URL}/feed`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': getState().user.token
        }
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
        .then(feed => {
            dispatch(getFeedSuccess(feed));
        })
        .catch(e => dispatch(getFeedFailure(e.msg ? e.msg : 'Could not load feed')));
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
