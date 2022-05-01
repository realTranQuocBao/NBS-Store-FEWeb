import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createCategoryAdmin } from "../../../Redux/Actions/categoryActions";
import { CATEGORY_CREATE_RESET } from "../../../Redux/Constants/categoryConstants.js";
import Message from "../../base/LoadingError/Error";
import Loading from "../../base/LoadingError/Loading";
import Toast from "../../base/LoadingError/Toast";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};
const CreateCategory = () => {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const categoryCreateAdmin = useSelector((state) => state.categoryCreateAdmin);
  const { loading, error, category } = categoryCreateAdmin;
  // console.log("Load category>>>", category);

  useEffect(() => {
    if (category) {
      toast.success("Category Added", ToastObjects);
      dispatch({ type: CATEGORY_CREATE_RESET });
      setName("");
    }
  }, [category, dispatch, loading]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createCategoryAdmin(name));
  };
  return (
    <>
      <Toast />
      <div className="col-md-12 col-lg-4">
        <form onSubmit={submitHandler}>
          {error && <Message variant="alert-danger">{error}</Message>}
          {loading && <Loading />}
          <div className="mb-4">
            <label htmlFor="category_name" className="form-label">
              Name
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="form-control py-3"
              id="category_name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          {/* <div className="mb-4">
          <label className="form-label">Images</label>
          <input className="form-control" type="file" />
        </div>
        <div className="mb-4">
          <label className="form-label">Description</label>
          <textarea
            placeholder="Type here"
            className="form-control"
            rows="4"
          ></textarea>
        </div> */}

          <div className="d-grid">
            <button
              className="btn btn-size btn-primary py-3">
              Create category
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateCategory;
