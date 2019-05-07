import { GET_FEED_REQUEST, GET_FEED_SUCCESS, GET_FEED_FAILURE } from '../constants/actionTypes';

const initialState = {
    isLoading: false,
    error: null,
    feed: {
        profiles: [],
        ads: []
    }
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_FEED_REQUEST:
            return {
                ...state,
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
        default:
            return state;
    }
}
