import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createCategoryAdmin } from "../../../Redux/Actions/categoryActions";
import { CATEGORY_CREATE_RESET } from "../../../Redux/Constants/categoryConstants.js";
import Loading from "../../base/LoadingError/Loading";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000
};
const CreateCategory = () => {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const categoryCreateAdmin = useSelector((state) => state.categoryCreateAdmin);
  const { loading, error, category } = categoryCreateAdmin;

  useEffect(() => {
    if (category) {
      toast.success("Category Added", ToastObjects);
      dispatch({ type: CATEGORY_CREATE_RESET });
      setName("");
    }
    if (error) {
      toast.error(error, ToastObjects);
      dispatch({ type: CATEGORY_CREATE_RESET });
    }
  }, [category, dispatch, loading, error]);

  function convertToSlug(Text) {
    return Text.toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createCategoryAdmin({ name, slug: convertToSlug(name) }));
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        {/* {error && <Message variant="alert-danger">{error}</Message>} */}
        {loading && <Loading />}
        <div className="mb-4">
          <label htmlFor="category_name" className="form-label">
            Name
          </label>
          <input
            required
            type="text"
            placeholder="Type here"
            className="form-control"
            id="category_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="d-grid w-25">
          <button className="btn btn-size btn-primary">Create category</button>
        </div>
      </form>
    </>
  );
};

export default CreateCategory;
