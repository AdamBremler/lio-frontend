import { GET_PROFILE, PROFILE_FAILURE, UPDATE_PROFILE, ADD_EDUCATION, ADD_EXPERIENCE } from '../constants/actionTypes';
import Axios from 'axios';
import { createBrowserHistory } from 'history';

createBrowserHistory();

//Get profile by ID(use this one to display other members profile)
export const getProfilebyId = (id) => async (dispatch) => {
    try {
        const res = await Axios.get(`${process.env.REACT_APP_API_URL}/profile/user/${id}`)
        dispatch({ type: GET_PROFILE, payload: res.data })
    } catch (error) {
        dispatch({ type: PROFILE_FAILURE, payload: { msg: error.response } })
    }
}
//Get profile on the logged in user
export const getProfile = () => async (dispatch, getState) => {
    try {
        const res = await Axios.get(`${process.env.REACT_APP_API_URL}/profile/user/${getState().user.user.id}`)
        dispatch({ type: GET_PROFILE, payload: res.data })
    } catch (error) {
        dispatch({ type: PROFILE_FAILURE, payload: { msg: error.response } })
    }
}

//Send formdata to API. TODO: Fix so that the token gets sent so we can use our auth middleware in the backend instead of sending user id params.
export const saveProfile = (formData) => (dispatch, getState) => {
    try {
        const res = Axios.post(`${process.env.REACT_APP_API_URL}/profile/${getState().user.user.id}`, formData)
        dispatch({ type: GET_PROFILE, payload: res.data.profile })
        dispatch(profileUpdated(formData));
    } catch (error) {
        dispatch({ type: PROFILE_FAILURE, payload: { msg: error.response } })
        console.log('Error when saving profile')
    }
}

export const saveEducation = (formData) => async (dispatch, getState) => {
    try {
        const res = await Axios.put(`${process.env.REACT_APP_API_URL}/profile/education/${getState().user.user.id}`, formData)
        dispatch({ type: ADD_EDUCATION, payload: res.data })
    } catch (error) {
        dispatch({ type: PROFILE_FAILURE, payload: { msg: error.response } })
        console.log('Error when saving experience')
    }
}

export const saveExperience = (formData) => async (dispatch, getState) => {
    try {
        const res = await Axios.put(`${process.env.REACT_APP_API_URL}/profile/experience/${getState().user.user.id}`, formData)
        dispatch({ type: ADD_EXPERIENCE, payload: res.data })

    } catch (error) {
        dispatch({ type: PROFILE_FAILURE, payload: { msg: error.response } })
        console.log('Error when saving experience')
    }
}

export const deleteExp = id => (dispatch, getState) => {
    try {
        const res = Axios.delete(`${process.env.REACT_APP_API_URL}/profile/experience/${id}`, {
            headers: {
                'Authorization': `Bearer ${getState().user.token}`
            }
        });

        dispatch({ payload: res.data, type: UPDATE_PROFILE })
    } catch (error) {
        dispatch({ type: PROFILE_FAILURE, payload: { msg: error.response } })
        console.log('Error when deleting experience')
    }
}

const profileUpdated = (profile) => ({
    type: GET_PROFILE,
    payload: {
        profile
    }
});