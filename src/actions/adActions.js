import { POST_AD_REQUEST, POST_AD_SUCCESS, POST_AD_FAILURE } from '../constants/actionTypes';

export const postAd = input => (dispatch, getState) => {
    dispatch(postAdRequest());

    fetch(`${process.env.REACT_APP_API_URL}/ad`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getState().user.token}`
        },
        body: JSON.stringify(input)
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
        .then(ad => {
            dispatch(postAdSuccess());
        })
        .catch(e => dispatch(postAdFailure(e.msg ? e.msg : 'Could post ad')));
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
