import axios from "axios";
import {
    CATEGORY_CREATE_FAIL,
    CATEGORY_CREATE_REQUEST,
    CATEGORY_CREATE_SUCCESS,
    CATEGORY_LIST_FAIL,
    CATEGORY_LIST_REQUEST,
    CATEGORY_LIST_SUCCESS
} from "../Constants/categoryConstants.js";
import { logout } from "./userActions.js";

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
        // console.log("log category>>>", data); 

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
// CREATE CATEGORY
export const createCategoryAdmin =
    (name) =>
        async (dispatch, getState) => {
            try {
                dispatch({ type: CATEGORY_CREATE_REQUEST });

                const {
                    userLogin: { userInfo },
                } = getState();

                const config = {
                    headers: {
                        Authorization: `Bearer ${userInfo.token}`,
                    },
                };

                const { data } = await axios.post(
                    `/api/v1/category/`,
                    { name },
                    config
                );

                dispatch({ type: CATEGORY_CREATE_SUCCESS, payload: data });
            } catch (error) {
                const message =
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message;
                if (message === "Not authorized, token failed") {
                    dispatch(logout());
                }
                dispatch({
                    type: CATEGORY_CREATE_FAIL,
                    payload: message,
                });
            }
        };