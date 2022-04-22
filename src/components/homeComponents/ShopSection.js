import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Pagination from "./pagination";
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../Redux/Actions/productActions';
import Loading from './../base/LoadingError/Loading';
import Message from './../base/LoadingError/Error';

const ShopSection = (props) => {
  const { keyword, pageNumber } = props;
  console.log("===> Log props: ", props);
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  // handle get all products
  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);
  // console.log(">>>All data products: ", products);
  return (
    <>
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col-lg-12 col-md-12 article">
              <div className="shopcontainer row">
                <div className="title-section">
                  <h2 className="heading-section main-effect">all product</h2>
                </div>
                {
                  loading ? (
                    <div className="mb-5 mt-5">
                      <Loading />
                    </div>
                  )
                    : error ? (
                      <Message variant="alert-danger">{error}</Message>
                    )
                      : (
                        products && products.map((product) => (
                          <div
                            className="shop col-lg-4 col-md-6 col-sm-6"
                            key={product._id}
                          >
                            <div className="border-product">
                              <Link to={`/products/${product._id}`}>
                                <div className="shopBack main-effect">
                                  <img className="main-scale" src={product.image} alt={product.name} />
                                </div>
                              </Link>

                              <div className="shoptext">
                                <p>
                                  <Link to={`/products/${product._id}`}>
                                    {`${product.name.length} >= 35` ? `  
                                    ${product.name.slice(0, 35)}...` : ` ${product.name}}`}
                                  </Link>
                                </p>

                                <Rating
                                  value={product.rating}
                                  text={`${product.numReviews} reviews`}
                                />
                                <h3>${product.price}</h3>
                              </div>
                            </div>
                          </div>
                        ))
                      )}
                {/* Pagination */}
                <Pagination
                  page={page}
                  pages={pages}
                  keyword={keyword ? keyword : ""}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopSection;
