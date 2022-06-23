import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProductAdmin } from "../../../Redux/Actions/productActions";
import { toast } from "react-toastify";
import Rating from "../../homeComponents/Rating";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};
const Product = (props) => {
  const { product, index } = props;
  const dispatch = useDispatch();

  const deletehandler = (id) => {
    if (window.confirm("Are you sure to delete this product???")) {
      dispatch(deleteProductAdmin(id));
      toast.success("Delete product success!!!", ToastObjects)
    }
  };

  return (
    <>
      <div className="mobile-header col-md-6 col-sm-6 col-lg-3 mb-3">
        <div className="card card-product-grid shadow-sm">
          <Link to="#" className="img-wrap">
            <img src={product.image} alt="Product" />
          </Link>
          <div className="info-wrap">
            <Link to="#" className="title text-truncate">
              {product.name}
            </Link>
            <div className="price mb-2">${product.price}</div>
            <Rating
              value={product.rating}
              text={`(${product.numReviews})`}
            />
            <div className="row">
              <Link
                to={`/admin/product/${product._id}/edit`}
                className="btn btn-sm btn-outline-success p-2 pb-3 col-md-6 btn-item-product"
              >
                <i className="fas fa-pen"></i>
              </Link>
              <Link
                to="#"
                onClick={() => deletehandler(product._id)}
                className="btn btn-sm btn-outline-danger p-2 pb-3 col-md-6 btn-item-product"
              >
                <i className="fas fa-trash-alt"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <tr className="pc-header">
        <td>{index + 1}</td>
        <td>
          <img style={{ width: "70px" }} src={product?.image} alt={product?.name} />
        </td>
        <td>
          <b alt={product?.name}>{`${product?.name.lenght}>=25` ? `${product?.name.slice(0, 25)}...` : `${product?.name}`}</b>
        </td>
        <td>
          <Rating
            value={product.rating}
            text={`(${product.numReviews})`}
          />
        </td>
        <td>
          <b>{product?.category.name}</b>
        </td>
        <td>
          <b>{product?.price}$</b>
        </td>
        <td>
          <b>{product?.countInStock}</b>
        </td>
        <td>
          <b>{product?.totalSales}</b>
        </td>
        <td className="text-end">
          <div className="dropdown">
            <Link
              to="#"
              data-bs-toggle="dropdown"
              className="btn btn-light"
            >
              <i className="fas fa-ellipsis-h"></i>
            </Link>
            <div className="dropdown-menu">
              <Link className="dropdown-item" to={`/admin/product/${product._id}/edit`}>
                Edit info
              </Link>
              <Link
                to="#"
                className="dropdown-item text-danger"
                onClick={() => deletehandler(product._id)}
              >
                Delete
              </Link>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default Product;
