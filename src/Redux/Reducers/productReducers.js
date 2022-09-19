import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  //client
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  //admin
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_RESET,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_EDIT_FAIL,
  PRODUCT_EDIT_REQUEST,
  PRODUCT_EDIT_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_RESET,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_CREATE_REVIEW_RESET,
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
  PRODUCT_CREATE_COMMENT_RESET,
  PRODUCT_CREATE_COMMENT_REPLY_REQUEST,
  PRODUCT_CREATE_COMMENT_REPLY_SUCCESS,
  PRODUCT_CREATE_COMMENT_REPLY_FAIL,
  PRODUCT_CREATE_COMMENT_REPLY_RESET,
  PRODUCT_DELETE_COMMENT_REQUEST,
  PRODUCT_DELETE_COMMENT_SUCCESS,
  PRODUCT_DELETE_COMMENT_FAIL,
  PRODUCT_DELETE_COMMENT_RESET,
  PRODUCT_UPDATE_COMMENT_REQUEST,
  PRODUCT_UPDATE_COMMENT_SUCCESS,
  PRODUCT_UPDATE_COMMENT_FAIL,
  PRODUCT_UPDATE_COMMENT_RESET,
  PRODUCT_LIST_COMMENT_REQUEST,
  PRODUCT_LIST_COMMENT_SUCCESS,
  PRODUCT_LIST_COMMENT_FAIL
} from "../Constants/productConstants";

/**
 * CLIENT ONLY
 */
// PRODUCT LIST
export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        page: action.payload.page,
        pages: action.payload.pages,
        products: action.payload.products
      };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
// PRODUCT LIST BEST SELLER
export const productListReducerBestSeller = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_BEST_SELLER_REQUEST:
      return { loading: true, products: [...state.products] };
    case PRODUCT_BEST_SELLER_SUCCESS:
      return {
        loading: false,
        products: action.payload.products
      };
    case PRODUCT_BEST_SELLER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
// PRODUCT LIST BEST NUM VIEW
export const productListReducerBestNumView = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_BEST_NUM_VIEW_REQUEST:
      return { loading: true, products: [...state.products] };
    case PRODUCT_BEST_NUM_VIEW_SUCCESS:
      return {
        loading: false,
        products: action.payload.products
      };
    case PRODUCT_BEST_NUM_VIEW_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// SINGLE PRODUCT
export const productDetailsReducer = (state = { product: { reviews: [] } }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// SINGLE PRODUCT
export const productCommentReducer = (
  state = {
    comments: []
  },
  action
) => {
  switch (action.type) {
    case PRODUCT_COMMENT_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_COMMENT_SUCCESS:
      return { loading: false, success: true, comments: action.payload };
    case PRODUCT_COMMENT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// PRODUCT COMMENT CREATE
export const productCreateCommentReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_COMMENT_REQUEST:
      return { loading: true };
    case PRODUCT_CREATE_COMMENT_SUCCESS:
      return { loading: false, success: true };
    case PRODUCT_CREATE_COMMENT_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_CREATE_COMMENT_RESET:
      return {};
    default:
      return state;
  }
};
// DELETE COMMENT
export const productDeleteCommentReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_DELETE_COMMENT_REQUEST:
      return { loading: true };
    case PRODUCT_DELETE_COMMENT_SUCCESS:
      return { loading: false, success: true };
    case PRODUCT_DELETE_COMMENT_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_DELETE_COMMENT_RESET:
      return {};
    default:
      return state;
  }
};
// PRODUCT COMMENT CREATE
export const productCreateCommentReplyReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_COMMENT_REPLY_REQUEST:
      return { loading: true };
    case PRODUCT_CREATE_COMMENT_REPLY_SUCCESS:
      return { loading: false, success: true };
    case PRODUCT_CREATE_COMMENT_REPLY_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_CREATE_COMMENT_REPLY_RESET:
      return {};
    default:
      return state;
  }
};
// UPDATE COMMENT
export const productUpdateCommentReducer = (state = { comment: {} }, action) => {
  switch (action.type) {
    case PRODUCT_UPDATE_COMMENT_REQUEST:
      return { loading: true };
    case PRODUCT_UPDATE_COMMENT_SUCCESS:
      return { loading: false, success: true, comment: action.payload };
    case PRODUCT_UPDATE_COMMENT_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_UPDATE_COMMENT_RESET:
      return { comment: {} };
    default:
      return state;
  }
};
// PRODUCT REVIEW CREATE
export const productCreateReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REVIEW_REQUEST:
      return { loading: true };
    case PRODUCT_CREATE_REVIEW_SUCCESS:
      return { loading: false, success: true };
    case PRODUCT_CREATE_REVIEW_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_CREATE_REVIEW_RESET:
      return {};
    default:
      return state;
  }
};

/**
 * ADMIN ONLY
 */
// ALL PRODUCTS
export const productListReducerAdmin = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        page: action.payload.page,
        pages: action.payload.pages,
        products: action.payload.products
      };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
// ALL PRODUCTS WITHOUR PAGINATION
export const productListReducerAdminAll = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload
      };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
// DELETE PRODUCT
export const productDeleteReducerAdmin = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_DELETE_REQUEST:
      return { loading: true };
    case PRODUCT_DELETE_SUCCESS:
      return { loading: false, success: true };
    case PRODUCT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// CREATE PRODUCT
export const productCreateReducerAdmin = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REQUEST:
      return { loading: true };
    case PRODUCT_CREATE_SUCCESS:
      return { loading: false, success: true, product: action.payload };
    case PRODUCT_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

// EDIT PRODUCT
export const productEditReducerAdmin = (state = { product: { reviews: [] } }, action) => {
  switch (action.type) {
    case PRODUCT_EDIT_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_EDIT_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_EDIT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// UPDATE PRODUCT
export const productUpdateReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_UPDATE_REQUEST:
      return { loading: true };
    case PRODUCT_UPDATE_SUCCESS:
      return { loading: false, success: true, product: action.payload };
    case PRODUCT_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_UPDATE_RESET:
      return { product: {} };
    default:
      return state;
  }
};

// PRODUCT LIST COMMENT
export const productListCommentReducerAdmin = (state = { comments: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_COMMENT_REQUEST:
      return { loading: true, comments: [...state.comments] };
    case PRODUCT_LIST_COMMENT_SUCCESS:
      return {
        loading: false,
        comments: action.payload
      };
    case PRODUCT_LIST_COMMENT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
