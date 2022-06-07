import axios from "axios";
import {
    CATEGORY_CREATE_FAIL,
    CATEGORY_CREATE_REQUEST,
    CATEGORY_CREATE_SUCCESS,
    CATEGORY_DELETE_FAIL,
    CATEGORY_DELETE_REQUEST,
    CATEGORY_DELETE_SUCCESS,
    CATEGORY_LIST_FAIL,
    CATEGORY_LIST_REQUEST,
    CATEGORY_LIST_SUCCESS
} from "../Constants/categoryConstants.js";
import { logout } from "./userActions.js";

/**
 * ADMIN
 */
// LIST ALL CATEGORY
export const listCategoryAdmin = () => async (dispatch, getState) => {
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

// DELETE CATEGORY
export const deleteCategoryAdmin = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: CATEGORY_DELETE_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        await axios.delete(`/api/v1/category/${id}`, config);

        dispatch({ type: CATEGORY_DELETE_SUCCESS });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        if (message === "Not authorized, token failed") {
            dispatch(logout());
        }
        dispatch({
            type: CATEGORY_DELETE_FAIL,
            payload: message,
        });
    }
};