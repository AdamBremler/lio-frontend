import { GET_PROFILE, PROFILE_FAILURE } from '../constants/actionTypes';
import Axios from 'axios';

export const getProfile = () => async (dispatch, getState) => {
    try {
        const res = await Axios.get(`${process.env.REACT_APP_API_URL}/profile/user/${getState().user.user.id}`)
        dispatch({ type: GET_PROFILE, payload: res.data })
    } catch (error) {
        dispatch({ type: PROFILE_FAILURE, payload: { msg: error.response.statusText } })
    }
}
