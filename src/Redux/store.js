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
  userUpdateAvatarReducer,
  userUpdateProfileReducer
} from "./Reducers/userReducers";
import {
  productListReducer,
  //client
  productDetailsReducer,
  //admin
  productUpdateReducer,
  productCreateReviewReducer,
  productListReducerAdmin,
  productCreateReducerAdmin,
  productEditReducerAdmin,
  productDeleteReducerAdmin,
  productListReducerAdminAll,
} from "./Reducers/productReducers";
import {
  orderCreateReducer,
  orderDeliveredReducer,
  orderDetailsReducer,
  orderListMyReducer,
  orderListReducerAdmin,
  orderPayReducer,
} from "./Reducers/orderReducres";
import { categoryCreateReducerAdmin, categoryDeleteReducerAdmin, categoryListReducerAdmin } from "./Reducers/categoryReducers";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productReviewCreate: productCreateReviewReducer,
  cart: cartReducers,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userUpdateAvatar: userUpdateAvatarReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  listMyOrders: orderListMyReducer,
  //admin
  userList: userListReducer,
  productListAdmin: productListReducerAdmin,
  productListAdminAll: productListReducerAdminAll,
  productDeleteAdmin: productDeleteReducerAdmin,
  productCreateAdmin: productCreateReducerAdmin,
  productEditAdmin: productEditReducerAdmin,
  productUpdate: productUpdateReducer,
  categoryListAdmin: categoryListReducerAdmin,
  categoryCreateAdmin: categoryCreateReducerAdmin,
  categoryDeleteAdmin: categoryDeleteReducerAdmin,
  orderListAdmin: orderListReducerAdmin,
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
