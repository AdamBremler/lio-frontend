import { GET_PROFILE, PROFILE_FAILURE } from '../constants/actionTypes';
import Axios from 'axios';

//Get current profile by ID
export const getProfilebyId = (id) => async (dispatch) => {
    try {
        const res = await Axios.get(`${process.env.REACT_APP_API_URL}/profile/user/${id}`)
        dispatch({ type: GET_PROFILE, payload: res.data })
    } catch (error) {
        dispatch({ type: PROFILE_FAILURE, payload: { msg: error.response.statusText } })
    }
}
//Get profile
export const getProfile = () => async (dispatch, getState) => {
    try {
        const res = await Axios.get(`${process.env.REACT_APP_API_URL}/profile/user/${getState().user.user.id}`)
        dispatch({ type: GET_PROFILE, payload: res.data })
    } catch (error) {
        dispatch({ type: PROFILE_FAILURE, payload: { msg: error.response.statusText } })
    }
}

//Send formdata to API. TODO: Fix so that the token gets sent so we can use our auth middleware in the backend instead of sending user id params.
export const saveProfile = (formData, history) => (dispatch, getState) => {
    try {
        // const token = getState().user.token
        // const headers = {
        //     headers: {
        //         'x-auth-token': token,
        //         'Content-Type': 'application/json',
        //     }
        // }
        const res = Axios.post(`${process.env.REACT_APP_API_URL}/profile/${getState().user.user.id}`, formData)
        dispatch({ type: GET_PROFILE, payload: res.data })
        dispatch(profileUpdated(formData));

    } catch (error) {
        dispatch({ type: PROFILE_FAILURE, payload: { msg: error.response } })
        console.log('error')
    }
}

const profileUpdated = (formData) => ({
    type: GET_PROFILE,
    payload: {
        formData
    }
});