import { REGISTER_SUCCESS } from '../constants/actionTypes';

const initialState = {
    token: null,
    user: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user
            }
        default:
            return state;
    }
}
