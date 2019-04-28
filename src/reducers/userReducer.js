import { LOGIN_SUCCESS, REGISTER_SUCCESS, LOGOUT } from '../constants/actionTypes';

const initialState = {
    token: null,
    user: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user
            };
        case LOGOUT:
            return initialState;
        default:
            return state;
    }
}
