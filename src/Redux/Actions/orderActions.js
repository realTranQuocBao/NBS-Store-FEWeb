import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_DELETE_FAIL,
  ORDER_DELETE_REQUEST,
  ORDER_DELETE_SUCCESS,
  ORDER_DELIVERED_FAIL,
  ORDER_DELIVERED_REQUEST,
  ORDER_DELIVERED_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_LIST_FAIL,
  ORDER_LIST_MY_FAIL,
  ORDER_LIST_MY_REQUEST,
  ORDER_LIST_MY_SUCCESS,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
} from "../Constants/orderConstants";
import { logout } from "./userActions";
import axios from "axios";
import { CART_CLEAR_ITEMS } from "../Constants/cartConstants";
import { request } from "../../utils/request";

// CREATE ORDER
export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_CREATE_REQUEST });

    const {
      userLogin: { userInfo }
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`
      }
    };

    const { data } = await request.post(`/api/v1/order`, order, config);
    dispatch({ type: ORDER_CREATE_SUCCESS, payload: data });
    dispatch({ type: CART_CLEAR_ITEMS, payload: data });
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload: message
    });
  }
};

// ORDER DETAILS
export const getOrderDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_DETAILS_REQUEST });

    const {
      userLogin: { userInfo }
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    };

    const { data } = await request.get(`/api/v1/order/${id}`, config);
    dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload: message
    });
  }
};

// ORDER PAY
export const payOrder = (orderId, paymentResult) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_PAY_REQUEST });

    const {
      userLogin: { userInfo }
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`
      }
    };

    const { data } = await request.patch(`/api/v1/order/${orderId}/pay`, paymentResult, config);
    dispatch({ type: ORDER_PAY_SUCCESS, payload: data });
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: ORDER_PAY_FAIL,
      payload: message
    });
  }
};

// LIST MY ORDERS
export const listMyOrders = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_LIST_MY_REQUEST });

    const {
      userLogin: { userInfo }
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    };

    const { data } = await request.get(`/api/v1/order/ordered`, config);
    dispatch({ type: ORDER_LIST_MY_SUCCESS, payload: data });
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: ORDER_LIST_MY_FAIL,
      payload: message
    });
  }
};

/**
 * Admin
 */
export const listOrders = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_LIST_REQUEST });

    const {
      userLogin: { userInfo }
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    };

    const { data } = await request.get(`/api/v1/order`, config);

    dispatch({ type: ORDER_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: ORDER_LIST_FAIL,
      payload: message
    });
  }
};

// ORDER DETAILS
export const getOrderDetailsAdmin = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_DETAILS_REQUEST });

    const {
      userLogin: { userInfo }
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    };

    const { data } = await request.get(`/api/v1/order/${id}`, config);
    dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload: message
    });
  }
};

// ORDER DELIVER
export const deliverOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_DELIVERED_REQUEST });

    const {
      userLogin: { userInfo }
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    };

    const { data } = await request.patch(`/api/v1/order/${order._id}/delivered`, {}, config);
    dispatch({ type: ORDER_DELIVERED_SUCCESS, payload: data });
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: ORDER_DELIVERED_FAIL,
      payload: message
    });
  }
};
// ORDER ORDER IS PAID
export const isPaidOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_PAY_REQUEST });

    const {
      userLogin: { userInfo }
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    };

    const { data } = await request.patch(`/api/v1/order/${order._id}/pay`, {}, config);
    dispatch({ type: ORDER_PAY_SUCCESS, payload: data });
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: ORDER_PAY_FAIL,
      payload: message
    });
  }
};
// DELETE ORDER
export const deleteOrderAdmin = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_DELETE_REQUEST });

    const {
      userLogin: { userInfo }
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    };

    await request.delete(`/api/v1/order/${id}`, config);

    dispatch({ type: ORDER_DELETE_SUCCESS });
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: ORDER_DELETE_FAIL,
      payload: message
    });
  }
};