import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { addToCartReducer, cartListItemReducers, cartRemoveReducer } from "./Reducers/cartReducers";
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
  productListReducerBestSeller,
} from "./Reducers/productReducers";
import {
  orderCreateReducer,
  orderDeleteReducerAdmin,
  orderDeliveredReducer,
  orderDetailsReducer,
  orderIsPaidReducer,
  orderListMyReducer,
  orderListReducerAdmin,
  orderPayReducer,
} from "./Reducers/orderReducres";
import {
  categoryCreateReducerAdmin,
  categoryDeleteReducerAdmin,
  categoryEditReducerAdmin,
  categoryListReducer,
  categoryListReducerAdmin,
  categoryUpdateReducerAdmin
} from "./Reducers/categoryReducers";

const reducer = combineReducers({
  productList: productListReducer,
  productListBestSeller: productListReducerBestSeller,
  productDetails: productDetailsReducer,
  productReviewCreate: productCreateReviewReducer,
  // cart: cartReducers,
  cartListItem: cartListItemReducers,
  addToCart: addToCartReducer,
  removeCart: cartRemoveReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userUpdateAvatar: userUpdateAvatarReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  listMyOrders: orderListMyReducer,
  categoryList: categoryListReducer,

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
  categoryEditAdmin: categoryEditReducerAdmin,
  categoryUpdateAdmin: categoryUpdateReducerAdmin,
  orderListAdmin: orderListReducerAdmin,
  orderDeliver: orderDeliveredReducer,
  orderDeleteAdmin: orderDeleteReducerAdmin,
  orderIsPaidAdmin: orderIsPaidReducer,
});

//get cart from localstorage
// const cartItemsFromLocalStorage = localStorage.getItem("cartItems")
//   ? JSON.parse(localStorage.getItem("cartItems"))
//   : [];

//login
const userInfoFromLocalStorage = localStorage.getItem("userInfoo")
  ? JSON.parse(localStorage.getItem("userInfoo"))
  : null;

//shipping address
// const shippingAddressFromLocalStorage = localStorage.getItem("shippingAddresss")
//   ? JSON.parse(localStorage.getItem("shippingAddresss"))
//   : {};

const initialState = {
  // cart: {
  //   cartItems: cartItemsFromLocalStorage,
  //   shippingAddress: shippingAddressFromLocalStorage
  // },
  userLogin: { userInfo: userInfoFromLocalStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
