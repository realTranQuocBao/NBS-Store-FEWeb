import {
    CATEGORY_LIST_REQUEST,
    CATEGORY_LIST_SUCCESS,
    CATEGORY_LIST_FAIL,
    CATEGORY_CREATE_REQUEST,
    CATEGORY_CREATE_SUCCESS,
    CATEGORY_CREATE_FAIL,
    CATEGORY_CREATE_RESET
} from "./../Constants/categoryConstants.js";
/**
 * ADMIN ONLY
 */
// ALL CATEGORYS
export const categoryListReducerAdmin = (state = { category: [] }, action) => {
    switch (action.type) {
        case CATEGORY_LIST_REQUEST:
            return { loading: true, category: [] };
        case CATEGORY_LIST_SUCCESS:
            return { loading: false, category: action.payload };
        case CATEGORY_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

// CREATE CATEGORY
export const categoryCreateReducerAdmin = (state = {}, action) => {
    switch (action.type) {
        case CATEGORY_CREATE_REQUEST:
            return { loading: true };
        case CATEGORY_CREATE_SUCCESS:
            return { loading: false, success: true, category: action.payload };
        case CATEGORY_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case CATEGORY_CREATE_RESET:
            return {};
        default:
            return state;
    }
};