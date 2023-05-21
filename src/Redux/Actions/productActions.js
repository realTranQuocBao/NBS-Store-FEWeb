import axios from "axios";

import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  //client
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  //admin
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_EDIT_FAIL,
  PRODUCT_EDIT_REQUEST,
  PRODUCT_EDIT_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_BEST_SELLER_REQUEST,
  PRODUCT_BEST_SELLER_SUCCESS,
  PRODUCT_BEST_SELLER_FAIL,
  PRODUCT_BEST_NUM_VIEW_FAIL,
  PRODUCT_BEST_NUM_VIEW_SUCCESS,
  PRODUCT_BEST_NUM_VIEW_REQUEST,
  PRODUCT_COMMENT_REQUEST,
  PRODUCT_COMMENT_SUCCESS,
  PRODUCT_COMMENT_FAIL,
  PRODUCT_CREATE_COMMENT_REQUEST,
  PRODUCT_CREATE_COMMENT_SUCCESS,
  PRODUCT_CREATE_COMMENT_FAIL,
  PRODUCT_CREATE_COMMENT_REPLY_REQUEST,
  PRODUCT_CREATE_COMMENT_REPLY_SUCCESS,
  PRODUCT_CREATE_COMMENT_REPLY_FAIL,
  PRODUCT_DELETE_COMMENT_REQUEST,
  PRODUCT_DELETE_COMMENT_SUCCESS,
  PRODUCT_DELETE_COMMENT_FAIL,
  PRODUCT_UPDATE_COMMENT_REQUEST,
  PRODUCT_UPDATE_COMMENT_SUCCESS,
  PRODUCT_UPDATE_COMMENT_FAIL,
  PRODUCT_LIST_COMMENT_FAIL,
  PRODUCT_LIST_COMMENT_SUCCESS,
  PRODUCT_LIST_COMMENT_REQUEST
} from "../Constants/productConstants";
import { logout } from "./userActions";
import { PRODUCT_CREATE_REVIEW_REQUEST } from "./../Constants/productConstants";
import { request } from "../../utils/request";

/**
 * CLIENT
 */
// product list action
export const listProducts =
  (keyword = "", pageNumber = "", category = "", priceOrder = "", dateOrder = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_LIST_REQUEST });
      const { data } = await request.get(
        `/api/v1/product?priceOrder=${priceOrder}&dateOrder=${dateOrder}&category=${category}&keyword=${keyword}&pageNumber=${pageNumber}&pageSize=20`
      );
      dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: PRODUCT_LIST_FAIL,
        payload: error.response && error.response.data.message ? error.response.data.message : error.message
      });
    }
  };
// product best seller
export const listProductsBestSeller = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_BEST_SELLER_REQUEST });
    const { data } = await request.get(`/api/v1/product?bestSeller=true&pageSize=12`);
    dispatch({ type: PRODUCT_BEST_SELLER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_BEST_SELLER_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    });
  }
};
// product best num view
export const listProductsBestNumView = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_BEST_NUM_VIEW_REQUEST });
    const { data } = await request.get(`/api/v1/product?pageSize=15`);
    dispatch({ type: PRODUCT_BEST_NUM_VIEW_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_BEST_NUM_VIEW_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    });
  }
};
// action details product
export const detailsProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });
    const { data } = await request.get(`/api/v1/product/${id}`);
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    });
  }
};
// action comment product
export const listCommentProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_COMMENT_REQUEST });
    const { data } = await request.get(`/api/v1/product/${id}/comments`);
    dispatch({ type: PRODUCT_COMMENT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_COMMENT_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    });
  }
};
// action create comment product
export const createProductComment = (data) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_CREATE_COMMENT_REQUEST });
    const {
      userLogin: { userInfo }
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`
      }
    };

    await request.post(`/api/v1/comment`, data, config);
    dispatch({ type: PRODUCT_CREATE_COMMENT_SUCCESS });
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: PRODUCT_CREATE_COMMENT_FAIL,
      payload: message
    });
  }
};
// DELETE COMMENT
export const deleteProductComment = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_DELETE_COMMENT_REQUEST });

    const {
      userLogin: { userInfo }
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    };

    await request.delete(`/api/v1/comment/${id}`, config);

    dispatch({ type: PRODUCT_DELETE_COMMENT_SUCCESS });
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: PRODUCT_DELETE_COMMENT_FAIL,
      payload: message
    });
  }
};
// action create comment reply product
export const createProductCommentReply = (data) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_CREATE_COMMENT_REPLY_REQUEST });
    const {
      userLogin: { userInfo }
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`
      }
    };

    await request.post(`/api/v1/comment`, data, config);
    dispatch({ type: PRODUCT_CREATE_COMMENT_REPLY_SUCCESS });
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: PRODUCT_CREATE_COMMENT_REPLY_FAIL,
      payload: message
    });
  }
};
// UPDATE PRODUCT
export const updateCommentProduct = (comment) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_UPDATE_COMMENT_REQUEST });

    const {
      userLogin: { userInfo }
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`
      }
    };

    const { data } = await request.patch(
      `/api/v1/comment/${comment.commentId}/content`,
      { content: comment.content },
      config
    );

    dispatch({ type: PRODUCT_UPDATE_COMMENT_SUCCESS, payload: data });
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: PRODUCT_UPDATE_COMMENT_FAIL,
      payload: message
    });
  }
};
// action create review product
export const createProductReview = (productId, review) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_CREATE_REVIEW_REQUEST });
    const {
      userLogin: { userInfo }
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`
      }
    };

    await request.post(`/api/v1/product/${productId}/review`, review, config);
    dispatch({ type: PRODUCT_CREATE_REVIEW_SUCCESS });
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: PRODUCT_CREATE_REVIEW_FAIL,
      payload: message
    });
  }
};

/**
 * ADMIN
 */

//  GET LIST PRODUCT HAVE BAGINATION
export const listProductsAdmin =
  (keyword = "", pageNumber = "") =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: PRODUCT_LIST_REQUEST });

      const {
        userLogin: { userInfo }
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`
        }
      };

      const { data } = await request.get(
        `/api/v1/product?keyword=${keyword}&pageNumber=${pageNumber}&category=All&status=all`,
        config
      );

      dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
      const message = error.response && error.response.data.message ? error.response.data.message : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch({
        type: PRODUCT_LIST_FAIL,
        payload: message
      });
    }
  };

// GET ALL PRODUCTS WITHOUT PAGINATION
export const listProductsAdminAll = () => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const {
      userLogin: { userInfo }
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    };

    const { data } = await request.get(`/api/v1/product?status=all&pageSize=100`, config);

    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: message
    });
  }
};

// DELETE PRODUCT
export const deleteProductAdmin = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_DELETE_REQUEST });

    const {
      userLogin: { userInfo }
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    };

    await request.delete(`/api/v1/product/${id}`, config);

    dispatch({ type: PRODUCT_DELETE_SUCCESS });
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: PRODUCT_DELETE_FAIL,
      payload: message
    });
  }
};

// CREATE PRODUCT
export const createProductAdmin =
  (name, category, size, price, description, image, countInStock) => async (dispatch, getState) => {
    try {
      dispatch({ type: PRODUCT_CREATE_REQUEST });

      const {
        userLogin: { userInfo }
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`
        }
      };

      const { data } = await request.post(
        `/api/v1/product/`,
        { name, category, size, price, description, image, countInStock },
        config
      );

      dispatch({ type: PRODUCT_CREATE_SUCCESS, payload: data });
    } catch (error) {
      const message = error.response && error.response.data.message ? error.response.data.message : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch({
        type: PRODUCT_CREATE_FAIL,
        payload: message
      });
    }
  };

// EDIT PRODUCT
export const editProductAdmin = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_EDIT_REQUEST });
    const { data } = await request.get(`/api/v1/product/${id}`);
    dispatch({ type: PRODUCT_EDIT_SUCCESS, payload: data });
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: PRODUCT_EDIT_FAIL,
      payload: message
    });
  }
};

// UPDATE PRODUCT
export const updateProductAdmin = (product) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_UPDATE_REQUEST });

    const {
      userLogin: { userInfo }
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`
      }
    };

    const { data } = await request.put(`/api/v1/product/${product._id}`, product, config);

    dispatch({ type: PRODUCT_UPDATE_SUCCESS, payload: data });
    dispatch({ type: PRODUCT_EDIT_SUCCESS, payload: data });
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: PRODUCT_UPDATE_FAIL,
      payload: message
    });
  }
};

// GET ALL PRODUCTS WITHOUT PAGINATION
export const listCommentProductsAdminAll = () => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_LIST_COMMENT_REQUEST });

    const {
      userLogin: { userInfo }
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    };

    const { data } = await request.get(`/api/v1/comment?status=all&dateOrder=newest`, config);

    dispatch({ type: PRODUCT_LIST_COMMENT_SUCCESS, payload: data });
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: PRODUCT_LIST_COMMENT_FAIL,
      payload: message
    });
  }
};