import {
    CATEGORY_LIST_REQUEST,
    CATEGORY_LIST_SUCCESS,
    CATEGORY_LIST_FAIL
} from "./../Constants/categoryConstants";
/**
 * ADMIN ONLY
 */
// ALL CATEGORYS
export const categoryListReducerAdmin = (state = { category: [] }, action) => {
    switch (action.type) {
        case CATEGORY_LIST_REQUEST:
            return { loading: true, CATEGORYs: [] };
        case CATEGORY_LIST_SUCCESS:
            // console.log("check success>>>");
            return { loading: false, CATEGORYs: action.payload };
        case CATEGORY_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};