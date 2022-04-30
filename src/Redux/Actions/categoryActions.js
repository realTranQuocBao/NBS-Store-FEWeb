import axios from "axios";
import {
    CATEGORY_LIST_FAIL,
    CATEGORY_LIST_REQUEST,
    CATEGORY_LIST_SUCCESS
} from "../Constants/categoryConstants";
import { logout } from "./userActions";

/**
 * ADMIN
 */
// LIST ALL CATEGORY
export const listCategoryAdmin = (keyword = " ", pageNumber = " ") => async (dispatch, getState) => {
    try {
        dispatch({ type: CATEGORY_LIST_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.get(`/api/v1/category/all`, config);
        console.log("log category>>>", data);

        dispatch({ type: CATEGORY_LIST_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        if (message === "Not authorized, token failed") {
            dispatch(logout());
        }
        dispatch({
            type: CATEGORY_LIST_FAIL,
            payload: message,
        });
    }
};