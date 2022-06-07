import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteCategoryAdmin, listCategoryAdmin } from "../../../Redux/Actions/categoryActions";
import { CATEGORY_DELETE_SUCCESS } from "../../../Redux/Constants/categoryConstants";
import Message from "../../base/LoadingError/Error";
import Loading from "../../base/LoadingError/Loading";
import Toast from "../../base/LoadingError/Toast";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};
const CategoriesTable = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const categoryListAdmin = useSelector(state => state.categoryListAdmin);
  const { error, loading, category } = categoryListAdmin;

  const categoryCreateAdmin = useSelector(state => state.categoryCreateAdmin);
  const { success: successAdd } = categoryCreateAdmin;

  const categoryDeleteAdmin = useSelector(state => state.categoryDeleteAdmin);
  const { success: successDel, error: errorDel } = categoryDeleteAdmin;

  const handleReloadCategory = () => {
    history.push('/admin/category');
  }
  const categoryDeleteHandeler = (id) => {

    if (window.confirm(("Are you sure delete category???"))) {
      dispatch(deleteCategoryAdmin(id));
    }
  }
  useEffect(() => {
    if (successDel) {
      dispatch({ type: CATEGORY_DELETE_SUCCESS });
      toast.success("Deleted success category!!!", ToastObjects);
    } else {
      toast.error(errorDel, ToastObjects);
    }
  }, [successDel, errorDel])
  useEffect(() => {
    dispatch(listCategoryAdmin())
  }, [dispatch, successAdd, successDel])
  return (
    <>
      <Toast />
    <span className="col-md-12 col-lg-8">
      <span
        onClick={handleReloadCategory}
        className="icon-refresh">
        <i className="fas fa-sync-alt"></i>
      </span>
      <table className="table">
        <thead>
          <tr>
            <th>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" />
              </div>
            </th>
            <th>STT</th>
            <th>Name</th>
            <th className="text-end">Action</th>
          </tr>
        </thead>
        {/* Table Data */}
        <tbody>
          {
            loading ? (
              <div className="mb-5 mt-5">
                <Loading />
              </div>
            )
              : error ? (
                <div>
                  <Message variant="alert-danger">{error}</Message>
                </div>
              )
                :
                (
                  category && category.map((item, index) => (
                    <tr key={item._id}>
                      <td>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" />
                        </div>
                      </td>
                      <td>{index + 1}</td>
                      <td>
                        <b>{item.name}</b>
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
                            <Link className="dropdown-item" to="#">
                              Edit info
                            </Link>
                            <Link
                              to="#"
                              className="dropdown-item text-danger"
                              onClick={() => categoryDeleteHandeler(item._id)}
                            >
                              Delete
                            </Link>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))
                )
          }
        </tbody>
      </table>
    </span>
    </>
  );
};

export default CategoriesTable;
