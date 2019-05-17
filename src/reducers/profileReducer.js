import { GET_PROFILE, PROFILE_FAILURE, CLEAR_PROFILE, UPDATE_PROFILE, ADD_EDUCATION, ADD_EXPERIENCE } from "../constants/actionTypes";

const initialState = {
    profile: [],
    isLoading: false,
    error: null
}

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case UPDATE_PROFILE:
            return {
                ...state,
                profile: payload,
                isLoading: false,
            }
        case GET_PROFILE:
            return {
                ...state,
                profile: payload,
                isLoading: false,
            }
        case ADD_EDUCATION:
            return {
                profile: { ...state.profile, payload },
                isLoading: false
            }
        case ADD_EXPERIENCE:
            return {
                profile: { ...state.profile, payload },
                isLoading: false
            }
        case PROFILE_FAILURE:
            return {
                ...state,
                error: payload,
                isLoading: false
            }
        case CLEAR_PROFILE:
            return {
                ...state,
                error: null,
                profile: '',
                isLoading: false,
            }
        default:
            return state;
    }
}
