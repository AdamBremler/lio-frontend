import { PAGINATION_SET_CURRENT_PAGE } from '../constants/actionTypes';

const initialState = {
    default: {
        current: 1,
        pageSize: 25
    }
};

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case PAGINATION_SET_CURRENT_PAGE:
            return {
                ...state,
                [payload.name]: {
                    current: payload.current,
                    pageSize: payload.pageSize
                }
            }
        default:
            return state;
    }
}
