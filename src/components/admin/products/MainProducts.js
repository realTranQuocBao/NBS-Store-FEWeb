import React, { useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { listProducts, listProductsAdmin, listProductsAdminAll } from "./../../../Redux/Actions/productActions.js";
import Loading from "./../../base/LoadingError/Loading";
import Message from "./../../base/LoadingError/Error";
import PaginationAdmin from "../Home/PaginationAdmin";

const MainProducts = (props) => {
  const { keyword, pageNumber } = props;
  const dispatch = useDispatch();

  const productListAdmin = useSelector(state => state.productListAdmin);
  const { loading, error, products, page, pages } = productListAdmin;

  const productDeleteAdmin = useSelector((state) => state.productDeleteAdmin);
  const { error: errorDelete, success: successDelete } = productDeleteAdmin;

  useEffect(() => {
    dispatch(listProductsAdmin(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber, successDelete]);

  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Products</h2>
        <div>
          <Link to="/admin/addproduct" className="btn btn-primary btn-size">
            Create new
          </Link>
        </div>
      </div>

      <div className="card mb-4 shadow-sm">
        <header className="card-header bg-white ">
          <div className="row">
            <div className="col-lg-4 col-md-6 me-auto ">
              <input
                type="search"
                placeholder="Search..."
                className="form-control p-2"
              />
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>All category</option>
                <option>Electronics</option>
                <option>Clothings</option>
                <option>Something else</option>
              </select>
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option to="/admin/products?priceOrder=desc">Expensive first</option>
                <option>Cheap first</option>
                <option>Latest added</option>
                <option>Most viewed</option>
              </select>
            </div>
          </div>
        </header>

        <div className="card-body">
          {errorDelete && (
            <Message variant="alert-danger">{errorDelete}</Message>
          )}
          {loading ? (
            <Loading />
          ) : error ? (
            <Message variant="alert-danger">{error}</Message>
            ) : (
            <div className="row">
              {/* Products */}
                  {products?.map((product) => (
                <Product product={product} key={product._id} />
              ))}
            </div>
          )}
          {/* PaginationAdmin */}
          <PaginationAdmin
            page={page}
            pages={pages}
            keyword={keyword ? keyword : ""}
          />
        </div>
      </div>
    </section>
  );
};

export default MainProducts;
