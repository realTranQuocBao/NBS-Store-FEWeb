import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Pagination from "./pagination";
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../Redux/Actions/productActions';
import Loading from './../base/LoadingError/Loading';
import Message from './../base/LoadingError/Error';
import Filter from "../../screens/Filter";
import { listCategory } from "../../Redux/Actions/categoryActions";

const ShopSection = (props) => {
  const { keyword, pageNumber } = props;
  const dispatch = useDispatch();

  const [categoryFilter, setCategoryFilter] = useState('')

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;
  // console.log("products", products);

  const categoryList = useSelector((state) => state.categoryList);
  const { category } = categoryList;
  let productsFilter = [];
  const handleCategoryFilter = () => {
    if (categoryFilter !== '') {
      productsFilter = products ? products.filter(item => item.category._id === categoryFilter) : []
    } else {
      productsFilter = products;
    }

  }
  handleCategoryFilter();

  // handle get all products
  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
    dispatch(listCategory());
  }, [dispatch, keyword, pageNumber]);
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
                <div className="row">
                  <div className="col-2 pc-header">
                    <Filter
                      category={category}
                      categoryFilter={categoryFilter}
                      setCategoryFilter={setCategoryFilter}
                    />
                  </div>
                  <div className="col-8 row product-container ">
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
                            productsFilter?.map((product) => (
                              <div
                                className="shop col-lg-3 "
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
                                        {`${product.name.length} >= 30` ? `  
                                    ${product.name.slice(0, 30)}...` : ` ${product.name}}`}
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
                  </div>
                </div>

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
