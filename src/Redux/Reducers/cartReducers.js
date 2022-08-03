import {
    CART_ADD_ITEM,
    CART_LIST_MY_FAIL,
    CART_LIST_MY_REQUEST,
    CART_LIST_MY_SUCCESS,
    CART_REMOVE_ITEM,
    CART_SAVE_PAYMENT_METHOD,
    CART_SAVE_SHIPPING_ADDRESS
} from './../Constants/cartConstants';

export const cartReducers = (
    state = { cartItems: [], shippingAddress: {} }, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            const existItem = state.cartItems.find((e) => e.product === item.product);
            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((e) => e.product === existItem.product ? item : e)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            };
        case CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter((x) => x.product !== action.payload)
            }
        case CART_SAVE_SHIPPING_ADDRESS:
            return {
                ...state,
                shippingAddress: action.payload
            }
        case CART_SAVE_PAYMENT_METHOD:
            return {
                ...state,
                paymentMethod: action.payload
            }
        default:
            return state;
    }
}
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