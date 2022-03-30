import React, { useEffect } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from './../Redux/Actions/cartActions';

const CartScreen = ({ match, location, history }) => {
  window.scrollTo(0, 0);
  const dispatch = useDispatch();
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  // console.log(qty);

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  // product total handler
  const totalHandler = cartItems.reduce((pro, item) => (pro + item.qty * item.price), 0).toFixed(2);

  // checkout handler
  const checkOutHandler = () => {
    history.push("/login?redirect=shipping")
  }

  // remove product from cart handler
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  }

  return (
    <>
      <Header />
      {/* Cart */}
      <div className="container">
        {
          cartItems.length === 0 ? (
            <div className=" alert alert-info text-center mt-3">
              Your cart is empty
              <Link
                className="btn btn-success mx-5 px-5 py-3"
                to="/"
                style={{
                  fontSize: "12px",
                }}
              >
                SHOPPING NOW
              </Link>
            </div>

          ) : (
            <>
              <div className=" alert alert-info text-center mt-3">
                Total Cart Products
                <Link className="text-success mx-2" to="/cart">
                  ({cartItems.length})
                </Link>
              </div>
              {/* cartiterm */}
              {
                cartItems && cartItems.map((item, index) => (

                  <div className="cart-iterm row" key={index}>
                    {/* {
                      console.log(">>>CartScreen - Item show", item)
                    } */}
                    <div
                      onClick={() => removeFromCartHandler(item.product)}
                      className="remove-button d-flex justify-content-center align-items-center">
                      <i className="fas fa-times"></i>
                    </div>
                    <div className="cart-image col-md-3">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="cart-text col-md-5 d-flex align-items-center">
                      <Link to={`/products/${item.product}`}>
                        <h4>{item.name}</h4>
                      </Link>
                    </div>
                    <div className="cart-qty col-md-2 col-sm-5 mt-md-5 mt-3 mt-md-0 d-flex flex-column justify-content-center">
                      <h6>QUANTITY</h6>
                      <select
                        value={item.qty}
                        onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}>
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="cart-price mt-3 mt-md-0 col-md-2 align-items-sm-end align-items-start  d-flex flex-column justify-content-center col-sm-7">
                      <h6>PRICE</h6>
                      <h4>${item.price}</h4>
                    </div>
                  </div>
                ))
              }

              {/* End of cart iterms */}
              <div className="total">
                <span className="sub">Total:</span>
                <span className="total-price">${totalHandler}</span>
              </div>
              <hr />
              {totalHandler > 0 && (
                <div className="cart-buttons d-flex align-items-center row">
                  <Link to="/" className="col-md-6 ">
                    <button>Continue To Shopping</button>
                  </Link>
                  <div className="col-md-6 d-flex justify-content-md-end mt-3 mt-md-0">
                    <button onClick={checkOutHandler}>
                      Checkout
                    </button>
                  </div>
                </div>
              )}
            </>
          )
        }

      </div>
    </>
  );
};

export default CartScreen;
