import { GET_PROFILE, PROFILE_FAILURE } from "../constants/actionTypes";

const initialState = {
    profile: [],
    isLoading: false,
    error: null
}

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_PROFILE:
            return {
                ...state,
                profile: payload,
                isLoading: false
            }
        case PROFILE_FAILURE:
            return {
                ...state,
                error: payload,
                isLoading: false
            }
        default:
            return state;
    }
}
