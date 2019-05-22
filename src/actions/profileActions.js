import { GET_PROFILE, PROFILE_FAILURE, UPDATE_PROFILE, ADD_EDUCATION, ADD_EXPERIENCE } from '../constants/actionTypes';
import Axios from '../helpers/lioAxiosInstance';
import { replace } from 'connected-react-router';

//Get profile by ID(use this one to display other members profile)
export const getProfilebyId = (id) => async (dispatch, getState) => {
    try {
        const res = await Axios.get(`/profile/user/${id}`, {
            headers: {
                'Authorization': `Bearer ${getState().user.token}`
            }
        })
        dispatch({ type: GET_PROFILE, payload: res.data })
    } catch (error) {
        dispatch({ type: PROFILE_FAILURE, payload: { msg: error.response } })
    }
}
//Get profile on the logged in user
export const getProfile = () => async (dispatch, getState) => {
    try {
        const res = await Axios.get(`/profile/user`, {
            headers: {
                'Authorization': `Bearer ${getState().user.token}`
            }
        })
        dispatch({ type: GET_PROFILE, payload: res.data })
    } catch (error) {
        dispatch({ type: PROFILE_FAILURE, payload: { msg: error.response } })
    }
}

export const saveProfile = (formData) => async (dispatch, getState) => {
    try {
        const { data } = await Axios.post(`/profile`, formData, {
            headers: {
                'Authorization': `Bearer ${getState().user.token}`
            }
        })
        dispatch(profileUpdated(data));
        dispatch(replace(`/profile/${data._id}`));
        console.log('Success when saving profile')
    } catch (error) {
        dispatch({ type: PROFILE_FAILURE, payload: { msg: error.response } })
        console.log('Error when saving profile')
    }
}

export const saveEducation = (formData) => async (dispatch, getState) => {
    try {
        const res = await Axios.put(`/profile/education`, formData, {
            headers: {
                'Authorization': `Bearer ${getState().user.token}`
            }
        })
        dispatch({ type: ADD_EDUCATION, payload: res.data })
    } catch (error) {
        dispatch({ type: PROFILE_FAILURE, payload: { msg: error.response } })
        console.log('Error when saving experience')
    }
}

export const saveExperience = (formData) => async (dispatch, getState) => {
    try {
        const res = await Axios.put(`/profile/experience`, formData, {
            headers: {
                'Authorization': `Bearer ${getState().user.token}`
            }
        })
        dispatch({ type: ADD_EXPERIENCE, payload: res.data })

    } catch (error) {
        dispatch({ type: PROFILE_FAILURE, payload: { msg: error.response } })
        console.log('Error when saving experience')
    }
}

export const deleteExp = id => async (dispatch, getState) => {
    try {
        const res = await Axios.delete(`/profile/experience/${id}`, {
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

export const deleteEducation = id => async (dispatch, getState) => {
    try {
        const res = await Axios.delete(`/profile/education/${id}`, {
            headers: {
                'Authorization': `Bearer ${getState().user.token}`
            }
        });

        dispatch({ payload: res.data, type: UPDATE_PROFILE })
    } catch (error) {
        dispatch({ type: PROFILE_FAILURE, payload: { msg: error.response } })
        console.log('Error when deleting education')
    }
}

const profileUpdated = (profile) => ({
    type: GET_PROFILE,
    payload: {
        profile
    }
});