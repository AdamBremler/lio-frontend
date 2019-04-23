import { GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS, GET_PROFILE_FAILURE } from '../constants/actionTypes';

const initialState = {
    user: null,
    error: null,
    isLoading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PROFILE_REQUEST:
            return {
                ...initialState,
                isLoading: true
            }
        case GET_PROFILE_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                isLoading: false
            }
        case GET_PROFILE_FAILURE:
            return {
                ...state,
                error: action.payload.error,
                isLoading: false
            }
        default:
            return state;
    }
}
