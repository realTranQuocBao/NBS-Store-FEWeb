import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { PRODUCT_CREATE_FAIL, PRODUCT_CREATE_RESET } from "./../../../Redux/Constants/productConstants";
import { createProductAdmin } from "./../../../Redux/Actions/productActions";
import Toast from "./../../base/LoadingError/Toast";
import Message from "./../../base/LoadingError/Error";
import Loading from "./../../base/LoadingError/Loading";
import { listCategoryAdmin } from "../../../Redux/Actions/categoryActions";
import { Select } from "antd";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000
};
const AddProductMain = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [size, setSize] = useState([]);
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const productCreateAdmin = useSelector((state) => state.productCreateAdmin);
  const { loading, error, product } = productCreateAdmin;

  const categoryListAdmin = useSelector((state) => state.categoryListAdmin);
  const { category: categoryAddProduct } = categoryListAdmin;

  const sizesOption = [];
  for (let i = 10; i < 45; i++) {
    sizesOption.push({
      value: i + 1,
      label: i + 1
    });
  }

  useEffect(() => {
    dispatch(listCategoryAdmin());
    if (product) {
      toast.success("Product Added", ToastObjects);
      dispatch({ type: PRODUCT_CREATE_RESET });
      setName("");
      setDescription("");
      setCountInStock(0);
      setImage("");
      setPrice(0);
      setSize([]);
    }
  }, [product, dispatch]);

  // Handle submit form
  const submitHandler = (e) => {
    e.preventDefault();
    if (price >= 0 && countInStock >= 0) {
      dispatch(createProductAdmin(name, category, size, price, description, image, countInStock));
    } else {
      dispatch({ type: PRODUCT_CREATE_FAIL });
      toast.error("Add product fail!!!", ToastObjects);
    }
    // console.log(name, category, size, price, description, image, countInStock);
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
            <h2 className="content-title">Add product</h2>
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
                  {error && <Message variant="alert-danger">{error}</Message>}
                  {loading && <Loading />}
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
                    <select id="category_title" className="form-select" onChange={(e) => setCategory(e.target.value)}>
                      <option value="">Choose category</option>
                      {categoryAddProduct &&
                        categoryAddProduct.map((category, index) => (
                          <option key={index} value={category._id}>
                            {category.name}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_size" className="form-label">
                      Size
                    </label>
                    <Select
                      mode="tags"
                      id="product_size"
                      placeholder="Type size here"
                      style={{
                        width: "100%"
                      }}
                      required
                      onChange={(value) => {
                        setSize(value);
                      }}
                      tokenSeparators={[","]}
                      options={sizesOption}
                    />
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
                      placeholder="Enter Image URL"
                      value={image}
                      required
                      onChange={(e) => setImage(e.target.value)}
                    />
                    <input className="form-control mt-3" type="file" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default AddProductMain;
