import { POST_AD_REQUEST, POST_AD_SUCCESS, POST_AD_FAILURE, GET_AD_REQUEST, GET_AD_SUCCESS, GET_AD_FAILURE, LOGIN_SUCCESS, REGISTER_SUCCESS, LOGOUT } from '../constants/actionTypes';

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
        case GET_AD_REQUEST:
            return {
                ...state,
                ad: null,
                error: null,
                isLoading: true
            }
        case GET_AD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                ad: action.payload.ad
            }
        case GET_AD_FAILURE:
            return {
                ...state,
                error: action.payload.error,
                isLoading: false
            }
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
        case LOGOUT:
            return initialState;
        default:
            return state;
    }
}
