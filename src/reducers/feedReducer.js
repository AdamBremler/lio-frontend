import { GET_FEED_REQUEST, GET_FEED_SUCCESS, GET_FEED_FAILURE, LOGIN_SUCCESS, REGISTER_SUCCESS, LOGOUT } from '../constants/actionTypes';

const initialState = {
    isLoading: false,
    error: null,
    feed: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_FEED_REQUEST:
            return {
                ...state,
                feed: null,
                error: null,
                isLoading: true
            }
        case GET_FEED_SUCCESS:
            return {
                ...state,
                feed: action.payload.feed,
                isLoading: false
            }
        case GET_FEED_FAILURE:
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
