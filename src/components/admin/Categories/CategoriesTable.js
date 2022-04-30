import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listCategoryAdmin } from "../../../Redux/Actions/categoryActions";

const CategoriesTable = () => {
  const dispatch = useDispatch();
  const categoryListAdmin = useSelector(state => state.categoryListAdmin);
  const { category } = categoryListAdmin;
  console.log("This is category>>>", category);
  useEffect(() => {
    dispatch(listCategoryAdmin())
  }, [dispatch])
  return (
    <div className="col-md-12 col-lg-8">
      <table className="table">
        <thead>
          <tr>
            <th>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" />
              </div>
            </th>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th className="text-end">Action</th>
          </tr>
        </thead>
        {/* Table Data */}
        <tbody>
          <tr>
            <td>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" />
              </div>
            </td>
            <td>1</td>
            <td>
              <b>Men clothes</b>
            </td>
            <td>Men clothes</td>
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
                  <Link className="dropdown-item text-danger" to="#">
                    Delete
                  </Link>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" />
              </div>
            </td>
            <td>2</td>
            <td>
              <b>Women fashion</b>
            </td>
            <td>Fashions for Women</td>

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
                  <Link className="dropdown-item text-danger" to="#">
                    Delete
                  </Link>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" />
              </div>
            </td>
            <td>3</td>
            <td>
              <b>Kids clothes</b>
            </td>
            <td>Clothes for kids</td>

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
                  <Link className="dropdown-item text-danger" to="#">
                    Delete
                  </Link>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CategoriesTable;
