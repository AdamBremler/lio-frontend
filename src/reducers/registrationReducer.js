import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from '../constants/actionTypes';

const initialState = {
    isLoading: false,
    error: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case REGISTER_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoading: false
            }
        case REGISTER_FAILURE:
            return {
                ...state,
                error: action.payload.error,
                isLoading: false
            }
        default:
            return state;
    }
}
