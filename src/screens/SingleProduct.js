import React, { useCallback, useEffect, useState } from "react";
import Header from "../components/Header";
import Rating from "../components/homeComponents/Rating";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createProductReview, detailsProduct, listCommentProduct, listProducts } from "../Redux/Actions/productActions";
import Loading from "./../components/base/LoadingError/Loading";
import Message from "./../components/base/LoadingError/Error";
import moment from "moment";
import {
  PRODUCT_CREATE_COMMENT_FAIL,
  PRODUCT_CREATE_COMMENT_REPLY_FAIL,
  PRODUCT_CREATE_COMMENT_REPLY_RESET,
  PRODUCT_CREATE_COMMENT_RESET,
  PRODUCT_CREATE_REVIEW_RESET,
  PRODUCT_DELETE_COMMENT_FAIL,
  PRODUCT_DELETE_COMMENT_RESET,
  PRODUCT_DELETE_COMMENT_SUCCESS,
  PRODUCT_UPDATE_COMMENT_FAIL,
  PRODUCT_UPDATE_COMMENT_RESET,
  PRODUCT_UPDATE_COMMENT_SUCCESS
} from "../Redux/Constants/productConstants";
import { addToCartItems } from "../Redux/Actions/cartActions";
import { ADD_TO_CART_FAIL } from "../Redux/Constants/cartConstants";
import ProductComment from "../components/singleProduct/ProductComment";
import { toast } from "react-toastify";
import Toast from "../components/base/LoadingError/Toast";
import Slider from "react-slick";
import ProductCompare from "../components/compare/ModalCompare";
import { Button, Modal, Tooltip } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000
};
const SingleProduct = ({ history, match }) => {
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(5);
  const [reviewContent, setReviewContent] = useState("");

  const [showBoxCompare, setShowBoxCompare] = useState(false);
  const [arrProductCompare, setArrProductCompare] = useState([]);

  const productId = match.params.id;
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { products } = productList;

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const relatedProducts = products?.filter((item) => item.category._id === product.category);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const { loading: loadingCreateReview, error: errorCreateReview, success: successCreateReview } = productReviewCreate;

  const notifiCreateProductComment = useSelector((state) => state.productCreateComment);
  const { success: successCreateComment, error: errorCreateComment } = notifiCreateProductComment;

  const notifiCreateProductCommentReply = useSelector((state) => state.productCreateCommentReply);
  const { success: successCreateCommentReply, error: errorCreateCommentReply } = notifiCreateProductCommentReply;

  const notifiDeleteProductComment = useSelector((state) => state.productDeleteComment);
  const { success: successDeleteComment, error: errorDeleteComment } = notifiDeleteProductComment;

  const notifiUpdateProductComment = useSelector((state) => state.productUpdateComment);
  const { success: successUpdateComment, error: errorUpdateComment } = notifiUpdateProductComment;

  const loadListCommentProduct = useCallback(() => {
    dispatch(listCommentProduct(productId));
  }, [dispatch, productId]);

  // handle get single products
  useEffect(() => {
    if (successCreateReview) {
      setReviewContent("");
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }
    dispatch(detailsProduct(productId));
    dispatch(listProducts());
  }, [dispatch, productId, successCreateReview]);

  // handle show noti create comment
  useEffect(() => {
    if (successCreateComment || successCreateCommentReply) {
      toast.success("Create product comment success!", ToastObjects);
      dispatch({ type: PRODUCT_CREATE_COMMENT_RESET });
      dispatch({ type: PRODUCT_CREATE_COMMENT_REPLY_RESET });
    }
    if (errorCreateComment || errorCreateCommentReply) {
      toast.error(errorCreateComment, ToastObjects);
      dispatch({ type: PRODUCT_CREATE_COMMENT_FAIL });
      dispatch({ type: PRODUCT_CREATE_COMMENT_REPLY_FAIL });
    }
  }, [dispatch, successCreateComment, errorCreateComment, successCreateCommentReply, errorCreateCommentReply]);

  // handle show noti delete comment
  useEffect(() => {
    if (successDeleteComment) {
      toast.success("Delete comment success!!!", ToastObjects);
      loadListCommentProduct();
      dispatch({ type: PRODUCT_DELETE_COMMENT_SUCCESS });
      dispatch({ type: PRODUCT_DELETE_COMMENT_RESET });
    }
    if (errorDeleteComment) {
      toast.error(errorDeleteComment, ToastObjects);
      dispatch({ type: PRODUCT_DELETE_COMMENT_FAIL });
    }
  }, [dispatch, successDeleteComment, errorDeleteComment, loadListCommentProduct]);

  // handle show noti update comment
  useEffect(() => {
    if (successUpdateComment) {
      toast.success("Update comment success!!!", ToastObjects);
      loadListCommentProduct();
      dispatch({ type: PRODUCT_UPDATE_COMMENT_SUCCESS });
      dispatch({ type: PRODUCT_UPDATE_COMMENT_RESET });
    }
    if (errorUpdateComment) {
      toast.error(errorUpdateComment, ToastObjects);
      dispatch({ type: PRODUCT_UPDATE_COMMENT_FAIL });
    }
  }, [dispatch, successUpdateComment, errorUpdateComment, loadListCommentProduct]);

  // Handle size product
  const [size, setSize] = useState();
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonSizeClick = (size) => {
    setActiveButton(size);
    setSize(size);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (userInfo) {
      if (qty > 0 && size > 0) {
        dispatch(addToCartItems(productId, qty, size));
        history.push(`/cart/${productId}?qty=${qty}?size=${size}`);
      } else {
        dispatch({ type: ADD_TO_CART_FAIL });
        toast.error("Please choose size product", ToastObjects);
      }
    } else {
      history.push("/login");
    }
  };

  const submitHandlerReview = (e) => {
    e.preventDefault();
    dispatch(
      createProductReview(productId, {
        rating,
        reviewContent
      })
    );
  };
  const onAvatarLoadError = (e) => {
    e.currentTarget.onerror = null; // prevents looping
    e.currentTarget.src = "../images/avatar/default.png";
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
          initialSlide: 0
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0
        }
      }
    ]
  };

  const handleShowCompare = () => {
    setShowBoxCompare(!showBoxCompare);
    setArrProductCompare([productId]);
  };

  // Handle guide size
  const [open, setOpen] = useState(false);
  const handleShowGuideSize = () => {
    setOpen(true);
  };

  const ShowGuideSize = () => {
    return (
      <Modal
        title="GUIDE SIZE PRODUCT"
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <img src="https://sneakerholicvietnam.vn/wp-content/uploads/2021/11/size-nhieu-brand-4.png" alt="" />
      </Modal>
    );
  };
  return (
    <>
      <Toast />
      {showBoxCompare ? (
        <ProductCompare
          showBoxCompare={showBoxCompare}
          setShowBoxCompare={setShowBoxCompare}
          arrProductCompare={arrProductCompare}
          setArrProductCompare={setArrProductCompare}
        />
      ) : null}
      <Header />
      <div className="container single-product">
        {loading ? (
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
                    <p className="text-compare" onClick={handleShowCompare}>
                      <i className="fa fa-plus-circle" aria-hidden="true"></i> Compare
                    </p>
                  </div>
                  <p>{product.description}</p>

                  <div className="product-count col-lg-7 ">
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Price</h6>
                      <span>${product.price}</span>
                    </div>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6 className="d-flex">
                        Size{""}
                        <Tooltip title="Guide size">
                          <QuestionCircleOutlined className="text-danger" onClick={handleShowGuideSize} />
                        </Tooltip>
                      </h6>
                      {/* <select onChange={(e) => setSize(e.target.value)} value={size} defaultValue={product?.size[0]}>
                        {product?.size?.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select> */}
                      <div className="d-flex flex-wrap">
                        {product?.size?.map((item) => {
                          return (
                            <Button
                              key={item}
                              className="antd-custom-btn me-1 mb-1"
                              type={activeButton === item ? "primary" : "default"}
                              onClick={() => handleButtonSizeClick(item)}
                            >
                              {item}
                            </Button>
                          );
                        })}
                      </div>
                    </div>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Status</h6>
                      {product.countInStock > 0 ? <span>In Stock</span> : <span>unavailable</span>}
                    </div>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Reviews</h6>
                      <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                    </div>
                    {product && product.countInStock > 0 ? (
                      <>
                        <div className="flex-box d-flex justify-content-between align-items-center">
                          <h6>Quantity</h6>
                          <select value={qty} onChange={(e) => setQty(Number(e.target.value))}>
                            {[...Array(product.countInStock).keys()].map((x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))}
                          </select>
                        </div>
                        <button onClick={handleAddToCart} className="round-black-btn">
                          Add To Cart
                        </button>
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
                {product.reviews.length === 0 && <Message variant={"alert-info mt-3"}>No Reviews</Message>}
                {product.reviews &&
                  product.reviews.map((review) => (
                    <div key={review._id} className="mb-5 mb-md-3 bg-light p-3 shadow-sm rounded">
                      <img
                        className="img-xs rounded-circle p-1"
                        src={review?.user?.avatarUrl}
                        onError={onAvatarLoadError}
                        alt="User avatar"
                      />
                      <strong>{review.user?.name}</strong>
                      <Rating value={review.rating} />
                      <span>{moment(review.createdAt).calendar()}</span>
                      <div className="alert alert-info mt-3">{review.reviewContent}</div>
                    </div>
                  ))}
              </div>
              <div className="col-md-6">
                <h6>WRITE A CUSTOMER REVIEW</h6>
                <div className="my-4">
                  {loadingCreateReview && <Loading />}
                  {errorCreateReview && <Message variant="alert-danger">{errorCreateReview}</Message>}
                </div>

                {userInfo ? (
                  <form onSubmit={submitHandlerReview}>
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
                      <strong>Reivew</strong>
                      <textarea
                        row="3"
                        value={reviewContent}
                        onChange={(e) => setReviewContent(e.target.value)}
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
            {/* Related products */}
            <div>
              {relatedProducts?.length > 0 && <h3 className="mb-3">Related products category</h3>}
              <div className="col-8 row related-product-container">
                {loading ? (
                  <div className="mb-5 mt-5">
                    <Loading />
                  </div>
                ) : error ? (
                  <Message variant="alert-danger">{error}</Message>
                ) : (
                  <Slider {...settings}>
                    {relatedProducts?.map((product) => (
                      <div className="shop col-lg-3 " key={product._id}>
                        <div className="border-product me-3">
                          <Link to={`/products/${product._id}`}>
                            <div className="shopBack main-effect">
                              <img className="main-scale" src={product.image} alt={product.name} />
                            </div>
                          </Link>

                          <div className="shoptext">
                            <p>
                              <Link to={`/products/${product._id}`}>
                                {`${product.name.length} >= 30`
                                  ? ` ${product.name.slice(0, 30)}...`
                                  : ` ${product.name}}`}
                              </Link>
                            </p>

                            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                            <h3>${product.price}</h3>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                )}
              </div>
            </div>
            {/* Product comment */}
            <ProductComment userInfo={userInfo} match={match} />
          </>
        )}
      </div>
      <ShowGuideSize />
    </>
  );
};

export default SingleProduct;
