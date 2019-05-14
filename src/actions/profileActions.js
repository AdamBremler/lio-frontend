import { GET_PROFILE, PROFILE_FAILURE } from '../constants/actionTypes';
import Axios from 'axios';

//Get profile by ID(use this one to display other members profile)
export const getProfilebyId = (id) => async (dispatch) => {
    try {
        const res = await Axios.get(`${process.env.REACT_APP_API_URL}/profile/user/${id}`)
        dispatch({ type: GET_PROFILE, payload: res.data })
    } catch (error) {
        dispatch({ type: PROFILE_FAILURE, payload: { msg: error.response.statusText } })
    }
}
//Get profile on the logged in user
export const getProfile = () => async (dispatch, getState) => {
    try {
        const res = await Axios.get(`${process.env.REACT_APP_API_URL}/profile/user/${getState().user.user.id}`)
        dispatch({ type: GET_PROFILE, payload: res.data })
    } catch (error) {
        dispatch({ type: PROFILE_FAILURE, payload: { msg: error.response.statusText } })
    }
}

//Send formdata to API. TODO: Fix so that the token gets sent so we can use our auth middleware in the backend instead of sending user id params.
export const saveProfile = (formData) => (dispatch, getState) => {
    try {
        const res = Axios.post(`${process.env.REACT_APP_API_URL}/profile/${getState().user.user.id}`, formData)
        dispatch({ type: GET_PROFILE, payload: res.data })
        dispatch(profileUpdated(formData));

    } catch (error) {
        dispatch({ type: PROFILE_FAILURE, payload: { msg: error.response } })
        console.log('Error when saving profile')
    }
}

export const saveEducation = (formData) => (dispatch, getState) => {
    console.log('hej')
    try {
        const res = Axios.put(`${process.env.REACT_APP_API_URL}/profile/education/${getState().user.user.id}`, formData)
        dispatch({ type: GET_PROFILE, payload: res.data })
        dispatch(profileUpdated(formData))
    } catch (error) {
        dispatch({ type: PROFILE_FAILURE, payload: { msg: error.response } })
        console.log('Error when saving education')
    }
}

export const saveExperience = (formData) => (dispatch, getState) => {
    console.log('hej')
    try {
        const res = Axios.put(`${process.env.REACT_APP_API_URL}/profile/experience/${getState().user.user.id}`, formData)
        dispatch({ type: GET_PROFILE, payload: res.data })
        dispatch(profileUpdated(formData))
    } catch (error) {
        console.log('Error when saving experience')
    }
}

const profileUpdated = (formData) => ({
    type: GET_PROFILE,
    payload: {
        formData
    }
});