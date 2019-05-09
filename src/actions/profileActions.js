import { GET_PROFILE, PROFILE_FAILURE } from '../constants/actionTypes';

export const getProfile = () => (dispatch, getState) => {
    dispatch({ type: GET_PROFILE });

    fetch(`${process.env.REACT_APP_API_URL}/profile/user/${getState().user.user.id}`, {
        method: 'GET',
    })
        .then(res => res.json()
            .then(data => ({ res, data }))
        )
        .then(({ res, data }) => {
            console.log(data)
            if (!res.ok) {
                throw data;
            }

            return data;
        })
}