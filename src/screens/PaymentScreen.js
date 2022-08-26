import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { savePaymentMethod } from "../Redux/Actions/cartActions";

const PaymentScreen = ({ history }) => {
    window.scrollTo(0, 0);

    const getShippingAddress = useSelector((state) => state.saveShippingAddress);
    const { shippingAddress } = getShippingAddress;

    if (!shippingAddress) {
        history.push("/shipping");
    }
    const [paymentMethod, setPaymentMethod] = useState("PayPal");

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        history.push("/placeorder");
    };
    return (
        <>
            <Header />
            <div className="container d-flex justify-content-center align-items-center login-center">
                <form className="Login2 col-md-8 col-lg-4 col-11" onSubmit={submitHandler}>
                    <h6>SELECT PAYMENT METHOD</h6>
                    <div className="payment-container">
                        <div className="radio-container">
                            <input
                                className="form-check-input"
                                type="radio"
                                value={paymentMethod}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                            />
                            <label className="form-check-label">PayPal or Credit Card</label>
                        </div>
                    </div>

                    <button type="submit">
                        <Link to="/placeorder" className="text-white">
                            Continue
                        </Link>
                    </button>
                </form>
            </div>
        </>
    );
};

export default PaymentScreen;
