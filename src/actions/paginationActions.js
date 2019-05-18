import { PAGINATION_SET_CURRENT_PAGE } from '../constants/actionTypes';

export const setCurrentPage = (name, current, pageSize) => ({
    type: PAGINATION_SET_CURRENT_PAGE,
    payload: {
        name,
        current,
        pageSize
    }
});
