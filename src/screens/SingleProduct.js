import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Rating from "../components/homeComponents/Rating";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { createProductReview, detailsProduct } from "../Redux/Actions/productActions";
import Loading from './../components/base/LoadingError/Loading';
import Message from './../components/base/LoadingError/Error';
import moment from "moment";
import { PRODUCT_CREATE_REVIEW_RESET } from "../Redux/Constants/productConstants";

const SingleProduct = ({ history, match }) => {

  // console.log(">>>View match: ", match);
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const productId = match.params.id
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const {
    loading: loadingCreateReview,
    error: errorCreateReview,
    success: successCreateReview,
  } = productReviewCreate;

  // handle get single products
  useEffect(() => {
    if (successCreateReview) {
      setRating(0);
      setComment("");
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }

    dispatch(detailsProduct(productId))
  }, [dispatch, productId, successCreateReview]);
  // console.log(">>>Single data product: ", product);

  const handleAddToCart = (e) => {
    e.preventDefault();
    history.push(`/cart/${productId}?qty=${qty}`);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createProductReview(productId, {
        rating,
        comment,
      })
    );
  };
  return (
    <>
      <Header />
      <div className="container single-product">
        {
          loading ? (
            <div className="mb-5 mt-5">
              <Loading />
            </div>
          ) : error ? (
            <Message variant="alert-danger">{error}</Message>
          ) : (
            <>
              <div className="row">
                <div className="col-md-6">
                  <div className="single-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="product-dtl">
                    <div className="product-info">
                      <div className="product-name">{product.name}</div>
                    </div>
                    <p>{product.description}</p>

                    <div className="product-count col-lg-7 ">
                      <div className="flex-box d-flex justify-content-between align-items-center">
                        <h6>Price</h6>
                        <span>${product.price}</span>
                      </div>
                      <div className="flex-box d-flex justify-content-between align-items-center">
                        <h6>Status</h6>
                        {product.countInStock > 0 ? (
                          <span>In Stock</span>
                        ) : (
                          <span>unavailable</span>
                        )}
                      </div>
                      <div className="flex-box d-flex justify-content-between align-items-center">
                        <h6>Reviews</h6>
                        <Rating
                          value={product.rating}
                          text={`${product.numReviews} reviews`}
                        />
                      </div>
                      {product && product.countInStock > 0 ? (
                        <>
                          <div className="flex-box d-flex justify-content-between align-items-center">
                            <h6>Quantity</h6>
                            <select
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}>
                              {[...Array(product.countInStock).keys()].map((x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              ))}
                            </select>
                          </div>
                          <button
                            onClick={handleAddToCart} className="round-black-btn">Add To Cart</button>
                        </>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>

              {/* RATING */}
              <div className="row my-5">
                <div className="col-md-6">
                  <h6 className="mb-3">REVIEWS</h6>
                  {
                    product.reviews.length === 0 && 
                    (<Message variant={"alert-info mt-3"}>No Reviews</Message>)
                  }
                  {
                    product.reviews && product.reviews.map(
                      (review) => (
                      <div 
                        key={review._id}
                        className="mb-5 mb-md-3 bg-light p-3 shadow-sm rounded">
                        <strong>{review.name}</strong>
                        <Rating value={review.rating}/>
                        <span>{moment(review.createdAt).calendar()}</span>
                        <div className="alert alert-info mt-3">
                          {review.comment}
                        </div>
                      </div>
                      )
                    )
                    }
                </div>
                <div className="col-md-6">
                  <h6>WRITE A CUSTOMER REVIEW</h6>
                  <div className="my-4">
                  {loadingCreateReview && <Loading />}
                  {errorCreateReview && (
                    <Message variant="alert-danger">
                      {errorCreateReview}
                    </Message>
                  )}
                  </div>

                  {userInfo ? (
                  <form onSubmit={submitHandler}>
                    <div className="my-4">
                      <strong>Rating</strong>
                      <select
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        className="col-12 bg-light p-3 mt-2 border-0 rounded"
                      >
                              <option value="">Select...</option>
                        <option value="1">1 - Poor</option>
                        <option value="2">2 - Fair</option>
                        <option value="3">3 - Good</option>
                        <option value="4">4 - Very Good</option>
                        <option value="5">5 - Excellent</option>
                      </select>
                    </div>
                    <div className="my-4">
                      <strong>Comment</strong>
                      <textarea
                        row="3"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="col-12 bg-light p-3 mt-2 border-0 rounded"
                      ></textarea>
                    </div>
                    <div className="my-3">
                      <button
                        disabled={loadingCreateReview}
                        className="col-12 bg-black border-0 p-3 rounded text-white"
                      >
                        SUBMIT
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="my-3">
                    <Message variant={"alert-warning"}>
                      Please{" "}
                      <Link to="/login">
                        " <strong>Login</strong> "
                      </Link>{" "}
                      to write a review{" "}
                    </Message>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SingleProduct;
