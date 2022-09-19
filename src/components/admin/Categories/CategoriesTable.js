import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteCategoryAdmin, listCategoryAdmin } from "../../../Redux/Actions/categoryActions";
import { CATEGORY_DELETE_RESET, CATEGORY_UPDATE_RESET } from "../../../Redux/Constants/categoryConstants";
import Message from "../../base/LoadingError/Error";
import Loading from "../../base/LoadingError/Loading";
import Toast from "../../base/LoadingError/Toast";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000
};
const CategoriesTable = ({ setIsEditCategory, handleEditCategory, handleCurrentCategory }) => {
  const dispatch = useDispatch();

  const categoryListAdmin = useSelector((state) => state.categoryListAdmin);
  const { error, loading, category } = categoryListAdmin;

  const categoryCreateAdmin = useSelector((state) => state.categoryCreateAdmin);
  const { success: successAdd } = categoryCreateAdmin;

  const categoryDeleteAdmin = useSelector((state) => state.categoryDeleteAdmin);
  const { success: successDel, error: errorDel } = categoryDeleteAdmin;

  const categoryUpdateAdmin = useSelector((state) => state.categoryUpdateAdmin);
  const { success: successUpdated, error: errorUpdated } = categoryUpdateAdmin;

  const categoryDeleteHandeler = (id) => {
    if (window.confirm("Are you sure delete category???")) {
      dispatch(deleteCategoryAdmin(id));
    }
  };

  useEffect(() => {
    if (successDel) {
      toast.success("Deleted success category!!!", ToastObjects);
    }
    if (errorDel) {
      toast.error(errorDel, ToastObjects);
    }
    dispatch({ type: CATEGORY_DELETE_RESET });
  }, [dispatch, successDel, errorDel]);

  useEffect(() => {
    if (successUpdated) {
      toast.success("Category Updated", ToastObjects);
      setIsEditCategory(false);
    }
    if (errorUpdated) {
      toast.error(errorUpdated, ToastObjects);
    }
    dispatch({ type: CATEGORY_UPDATE_RESET });
  }, [dispatch, successUpdated, errorUpdated, setIsEditCategory]);

  useEffect(() => {
    dispatch(listCategoryAdmin());
  }, [dispatch, successAdd, successDel, successUpdated]);

  return (
    <>
      <Toast />
      <table className="table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th className="text-end">Action</th>
          </tr>
        </thead>
        {/* Table Data */}
        <tbody>
          {loading ? (
            <tr className="mb-5 mt-5">
              <Loading />
            </tr>
          ) : error ? (
            <tr>
              <Message variant="alert-danger">{error}</Message>
            </tr>
          ) : (
            category?.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td className="fw-bold">{item.name}</td>
                <td className="text-end">
                  <div className="dropdown">
                    <Link to="#" data-bs-toggle="dropdown">
                      <i className="fas fa-ellipsis-h"></i>
                    </Link>
                    <div className="dropdown-menu">
                      <button
                        className="text-warning dropdown-item"
                        onClick={() => {
                          handleEditCategory();
                          handleCurrentCategory(index);
                        }}
                      >
                        Edit info
                      </button>
                      <button className="text-danger dropdown-item" onClick={() => categoryDeleteHandeler(item._id)}>
                        Delete
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
};

export default CategoriesTable;
