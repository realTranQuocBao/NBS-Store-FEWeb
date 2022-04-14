import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { cartReducers } from "./Reducers/cartReducers";
//admin
import {
  userDetailsReducer,
  userListReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer
} from "./Reducers/userReducers";
import {
  productListReducer,
  //client
  productDetailsReducer,
  //admin
  productDeleteReducer,
  productUpdateReducer,
  productCreateReviewReducer,
  productListReducerAdmin,
  productCreateReducerAdmin,
  productEditReducerAdmin,
} from "./Reducers/productReducers";
import {
  orderCreateReducer,
  orderDeliveredReducer,
  orderDetailsReducer,
  orderListMyReducer,
  orderListReducer,
  orderPayReducer,
} from "./Reducers/orderReducres";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productReviewCreate: productCreateReviewReducer,
  cart: cartReducers,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  listMyOrders: orderListMyReducer,
  //admin
  userList: userListReducer,
  productListAdmin: productListReducerAdmin,
  productDelete: productDeleteReducer,
  productCreateAdmin: productCreateReducerAdmin,
  productEditAdmin: productEditReducerAdmin,
  productUpdate: productUpdateReducer,
  orderList: orderListReducer,
  orderDeliver: orderDeliveredReducer,
});

//get cart from localstorage
const cartItemsFromLocalStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

//login
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

//shipping address
const shippingAddressFromLocalStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

const initialState = {
  cart: {
    cartItems: cartItemsFromLocalStorage,
    shippingAddress: shippingAddressFromLocalStorage
  },
  userLogin: { userInfo: userInfoFromLocalStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
