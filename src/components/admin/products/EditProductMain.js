import React, { useState, useEffect } from "react";
import Toast from "../../base/LoadingError/Toast";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  editProductAdmin,
  updateProductAdmin,
} from "./../../../Redux/Actions/productActions";
import { PRODUCT_CREATE_FAIL, PRODUCT_UPDATE_RESET } from "../../../Redux/Constants/productConstants";
import { toast } from "react-toastify";
import Message from "../../base/LoadingError/Error";
import Loading from "../../base/LoadingError/Loading";
import { listCategoryAdmin } from "../../../Redux/Actions/categoryActions";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};

const EditProductMain = (props) => {
  const { productId } = props;

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const productEditAdmin = useSelector((state) => state.productEditAdmin);
  const { loading, error, product } = productEditAdmin;
  const [category, setCategory] = useState(product.category);
  useEffect(() => {
    setCategory(product.category);
    return () => { setCategory(product.category) }
  }, [product._id, product.category]);

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

  const categoryListAdmin = useSelector((state) => state.categoryListAdmin);
  const {
    // loading: loadingCategory,
    // error: errorCategory,
    category: categoryEditProduct
  } = categoryListAdmin;

  useEffect(() => {
    dispatch(listCategoryAdmin());
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      toast.success("Product Updated", ToastObjects);
    } else {
      if (!product.name || product._id !== productId) {
        dispatch(editProductAdmin(productId));
      }
      else {
        setName(product.name);
        // setCategory(category);
        setDescription(product.description);
        setCountInStock(product.countInStock);
        setImage(product.image);
        setPrice(product.price);
      }
    }
  }, [product, dispatch, productId, successUpdate, category]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (price >= 0 && countInStock >= 0) {
      dispatch(
      updateProductAdmin({
        _id: productId,
        name,
        category,
        price,
        description,
        image,
        countInStock,
      }));
    } else {
      dispatch({ type: PRODUCT_CREATE_FAIL });
      toast.error("Update product fail!!!", ToastObjects)
    }
  };

  return (
    <>
      <Toast />
      <section className="content-main" style={{ maxWidth: "1200px" }}>
        <form onSubmit={submitHandler}>
          <div className="content-header">
            <Link to="/admin/products" className="btn btn-danger text-white btn-size">
              Go to products
            </Link>
            <h2 className="content-title">Update Product</h2>
            <div>
              <button type="submit" className="btn btn-primary btn-size">
                Publish now
              </button>
            </div>
          </div>

          <div className="row mb-4">
            <div className="">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  {errorUpdate && (
                    <Message variant="alert-danger">{errorUpdate}</Message>
                  )}
                  {loadingUpdate && <Loading />}
                  {loading ? (
                    <Loading />
                  ) : error ? (
                    <Message variant="alert-danger">{error}</Message>
                  ) : (
                    <>
                      <div className="mb-4">
                        <label htmlFor="product_title" className="form-label">
                          Product title
                        </label>
                        <input
                          type="text"
                          placeholder="Type here"
                          className="form-control"
                          id="product_title"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                          {/* {errorCategory && <Message variant="alert-danger">{errorCategory}</Message>}
                          {loadingCategory && <Loading />} */}
                          <div className="mb-4">
                            <label htmlFor="category_title" className="form-label">
                              Category
                            </label>
                            <select
                              id="category_title"
                              className="form-select"
                              value={category}
                              onChange={(e) => setCategory(e.target.value)}
                            >
                              {
                                categoryEditProduct && categoryEditProduct.map((categoryItem, index) => (
                                  <option
                                    key={index}
                                    value={categoryItem?._id}
                                  >
                                    {categoryItem?.name}
                                  </option>
                                )
                                )
                              }
                            </select>
                          </div>
                      <div className="mb-4">
                        <label htmlFor="product_price" className="form-label">
                          Price
                        </label>
                        <input
                          type="number"
                          placeholder="Type here"
                          className="form-control"
                          id="product_price"
                          required
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="product_price" className="form-label">
                          Count In Stock
                        </label>
                        <input
                          type="number"
                          placeholder="Type here"
                          className="form-control"
                          id="product_price"
                          required
                          value={countInStock}
                          onChange={(e) => setCountInStock(e.target.value)}
                        />
                      </div>
                      <div className="mb-4">
                        <label className="form-label">Description</label>
                        <textarea
                          placeholder="Type here"
                          className="form-control"
                          rows="7"
                          required
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                      </div>
                      <div className="mb-4">
                        <label className="form-label">Images</label>
                        <input
                          className="form-control"
                          type="text"
                          value={image}
                          required
                          onChange={(e) => setImage(e.target.value)}
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default EditProductMain;
