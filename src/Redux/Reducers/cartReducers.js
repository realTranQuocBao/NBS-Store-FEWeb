import {
  ADD_TO_CART_FAIL,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_RESET,
  ADD_TO_CART_SUCCESS,
  CART_REMOVE_FAIL,
  CART_REMOVE_REQUEST,
  CART_REMOVE_SUCCESS,
  CART_LIST_MY_FAIL,
  CART_LIST_MY_REQUEST,
  CART_LIST_MY_SUCCESS,
  // CART_ADD_ITEM,
  // CART_SAVE_PAYMENT_METHOD,
  // CART_SAVE_SHIPPING_ADDRESS,
  CART_CLEAR_SUCCESS,
  CART_UPDATE_REQUEST,
  CART_UPDATE_SUCCESS,
  CART_UPDATE_FAIL,
  CART_UPDATE_RESET
} from './../Constants/cartConstants';

// export const cartReducers = (
  // state = { cartItems: [], shippingAddress: {} }, action) => {
  // switch (action.type) {
    // case CART_ADD_ITEM:
    //   const item = action.payload;
    //   const existItem = state.cartItems.find((e) => e.product === item.product);
    //   if (existItem) {
    //     return {
    //       ...state,
    //       cartItems: state.cartItems.map((e) => e.product === existItem.product ? item : e)
    //     }
    //   } else {
    //     return {
    //       ...state,
    //       cartItems: [...state.cartItems, item]
    //     }
    //   };
    // case CART_REMOVE_ITEM:
    //     return {
    //         ...state,
    //         cartItems: state.cartItems.filter((x) => x.product !== action.payload)
    //     }
    // case CART_SAVE_SHIPPING_ADDRESS:
    //   return {
    //     ...state,
    //     shippingAddress: action.payload
    //   }
    // case CART_SAVE_PAYMENT_METHOD:
    //   return {
    //     ...state,
    //     paymentMethod: action.payload
    //   }
    // default:
    //   return state;
  // }
// }
// CART LIST ITEM
export const cartListItemReducers = (
  state = { cartItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case CART_LIST_MY_REQUEST:
      return { ...state, loading: true };
    case CART_LIST_MY_SUCCESS:
      return { loading: false, cart: action.payload };
    case CART_LIST_MY_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
// ADD TO CART
export const addToCartReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TO_CART_REQUEST:
      return { loading: true };
    case ADD_TO_CART_SUCCESS:
      return { loading: false, success: true, cartItems: action.payload };
    case ADD_TO_CART_FAIL:
      return { loading: false, error: action.payload };
    case ADD_TO_CART_RESET:
      return {};
    default:
      return state;
  }
};
// REMOVE CART
export const cartRemoveReducer = (state = {}, action) => {
  switch (action.type) {
    case CART_REMOVE_REQUEST:
      return { loading: true };
    case CART_REMOVE_SUCCESS:
      return { loading: false, success: true, message: action.payload };
    case CART_REMOVE_FAIL:
      return { loading: false, error: action.payload };
    case CART_CLEAR_SUCCESS:
      return { loading: false, success: true };
    default:
      return state;
  }
};
// UPDATE CART
export const cartUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case CART_UPDATE_REQUEST:
      return { loading: true };
    case CART_UPDATE_SUCCESS:
      return { loading: false, success: true, cartItems: action.payload };
    case CART_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case CART_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};