import axios from "axios"
import {
    ADD_TO_CART_FAIL,
    ADD_TO_CART_REQUEST,
    ADD_TO_CART_SUCCESS,
    CART_LIST_MY_FAIL,
    CART_LIST_MY_REQUEST,
    CART_LIST_MY_SUCCESS,
    CART_REMOVE_FAIL,
    CART_REMOVE_REQUEST,
    CART_REMOVE_SUCCESS,
    CART_SAVE_PAYMENT_METHOD,
    CART_SAVE_SHIPPING_ADDRESS
} from "../Constants/cartConstants";
import { logout } from "./userActions";

// action add to cart
// export const addToCart = (id, qty) => async (dispatch, getState) => {
//     const { data } = await axios.get(`/api/v1/product/${id}`);
//     dispatch({
//         type: CART_ADD_ITEM,
//         payload: {
//             product: data._id,
//             name: data.name,
//             image: data.image,
//             price: data.price,
//             countInStock: data.countInStock,
//             qty
//         }
//     })
//     localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
// }

// action remove product from cart
// export const removeFromCart = (id) => async (dispatch, getState) => {
//     dispatch({
//         type: CART_REMOVE_ITEM,
//         payload: id
//     });
//     localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
// }
// action save address shipping
export const saveShippingAddress = (data) => async (dispatch) => {
    dispatch({
        type: CART_SAVE_SHIPPING_ADDRESS,
        payload: data
    });
    localStorage.setItem("shippingAddress", JSON.stringify(data))
}
// action save payment method
export const savePaymentMethod = (data) => async (dispatch) => {
    dispatch({
        type: CART_SAVE_PAYMENT_METHOD,
        payload: data
    });
    localStorage.setItem("paymentMethod", JSON.stringify(data))
}

// Cart list item
export const getCartListItem = () => async (dispatch, getState) => {
    try {
        dispatch({ type: CART_LIST_MY_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.get(`/api/v1/cart`, config);
        dispatch({ type: CART_LIST_MY_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        if (message === "Not authorized, token failed") {
            dispatch(logout());
        }
        dispatch({
            type: CART_LIST_MY_FAIL,
            payload: message,
        });
    }
};

// ADD TO CART
export const addToCartItems =
    (productId, qty) => async (dispatch, getState) => {
        try {
            dispatch({ type: ADD_TO_CART_REQUEST });

            const {
                userLogin: { userInfo }
            } = getState();

            const config = {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`
                }
            };

            const { data } = await axios.patch(
                `/api/v1/cart/add`,
                { productId, qty },
                config
            );

            dispatch({ type: ADD_TO_CART_SUCCESS, payload: data });
        } catch (error) {
            const message = error.response && error.response.data.message ? error.response.data.message : error.message;
            if (message === "Not authorized, token failed") {
                dispatch(logout());
            }
            dispatch({
                type: ADD_TO_CART_FAIL,
                payload: message
            });
        }
    };

// REMOVE CART
export const removeFromCartItem = (productIds) => async (dispatch, getState) => {
    try {
        dispatch({ type: CART_REMOVE_REQUEST });

        const {
            userLogin: { userInfo }
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        };
        await axios.patch(`/api/v1/cart/remove`, { productIds }, config);

        dispatch({ type: CART_REMOVE_SUCCESS });
    } catch (error) {
        const message = error.response && error.response.data.message ? error.response.data.message : error.message;
        if (message === "Not authorized, token failed") {
            dispatch(logout());
        }
        dispatch({
            type: CART_REMOVE_FAIL,
            payload: message
        });
    }
};
