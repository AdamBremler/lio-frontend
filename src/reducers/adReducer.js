import { POST_AD_REQUEST, POST_AD_SUCCESS, POST_AD_FAILURE } from '../constants/actionTypes';

const initialState = {
    isLoading: false,
    error: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case POST_AD_REQUEST:
            return {
                ...state,
                error: null,
                isLoading: true
            }
        case POST_AD_SUCCESS:
            return {
                ...state,
                isLoading: false
            }
        case POST_AD_FAILURE:
            return {
                ...state,
                error: action.payload.error,
                isLoading: false
            }
        default:
            return state;
    }
}
