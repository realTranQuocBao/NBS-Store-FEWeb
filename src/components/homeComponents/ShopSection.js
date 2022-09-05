import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Pagination from "./pagination";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../Redux/Actions/productActions";
import Loading from "./../base/LoadingError/Loading";
import Message from "./../base/LoadingError/Error";
import Filter from "../../screens/Filter";
import { listCategory } from "../../Redux/Actions/categoryActions";

const ShopSection = (props) => {
  const { keyword, pageNumber, isFilter, setIsFilter } = props;
  const dispatch = useDispatch();

  const [categoryFilter, setCategoryFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  const categoryList = useSelector((state) => state.categoryList);
  const { category } = categoryList;

  // const checkNameCategory = (item) => item.name === categoryFilter;
  // const nameCate = category?.find(checkNameCategory)?.name;
  const checkIsFilter = useCallback(() => {
    if (categoryFilter !== "" || priceFilter !== "" || dateFilter !== "") {
      setIsFilter(true);
    } else {
      return isFilter;
    }
  }, [categoryFilter, isFilter, setIsFilter, priceFilter, dateFilter]);

  const loadData = useCallback(() => {
    dispatch(listProducts(keyword, pageNumber, categoryFilter, priceFilter, dateFilter));
    dispatch(listCategory());
  }, [dispatch, keyword, pageNumber, categoryFilter, priceFilter, dateFilter]);

  useEffect(() => {
    loadData();
    checkIsFilter();
  }, [loadData, checkIsFilter]);
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
                      priceFilter={priceFilter}
                      setPriceFilter={setPriceFilter}
                      dateFilter={dateFilter}
                      setDateFilter={setDateFilter}
                    />
                  </div>
                  <div className="col-8 row product-container ">
                    {loading ? (
                      <div className="mb-5 mt-5">
                        <Loading />
                      </div>
                    ) : error ? (
                      <Message variant="alert-danger">{error}</Message>
                    ) : (
                      products?.map((product) => (
                        <div className="col-lg-3" key={product._id}>
                          <div className="shadow p-3 mb-4 bg-body rounded">
                            <Link to={`/products/${product._id}`}>
                              <div className="shopBack main-effect">
                                <img className="main-scale" src={product.image} alt={product.name} />
                              </div>
                            </Link>

                            <div className="shoptext">
                              <p>
                                <Link to={`/products/${product._id}`}>
                                  {`${product.name.length} >= 30`
                                    ? `  
                                    ${product.name.slice(0, 30)}...`
                                    : ` ${product.name}}`}
                                </Link>
                              </p>

                              <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                              <h3>${product.price}</h3>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                {/* Pagination */}
                <Pagination page={page} pages={pages} keyword={keyword ? keyword : ""} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopSection;
