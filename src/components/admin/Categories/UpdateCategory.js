import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCategoryAdmin } from "../../../Redux/Actions/categoryActions";
import Loading from "../../base/LoadingError/Loading";

const UpdateCategory = ({ currentCategory, setIsEditCategory }) => {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");

  const dispatch = useDispatch();

  const categoryListAdmin = useSelector((state) => state.categoryListAdmin);
  const { category } = categoryListAdmin;

  const categoryUpdateAdmin = useSelector((state) => state.categoryUpdateAdmin);
  const { loading } = categoryUpdateAdmin;

  const updateCategoryHandler = useCallback(() => {
    const nameUpdate = category[currentCategory]?.name;
    const slugUpdate = category[currentCategory]?.slug;
    setName(nameUpdate);
    setSlug(slugUpdate);
  }, [category, currentCategory]);

  useEffect(() => {
    updateCategoryHandler();
  }, [updateCategoryHandler]);

  const submitHandler = () => {
    dispatch(
      updateCategoryAdmin({
        _id: category[currentCategory]?._id,
        name,
        slug,
        status: true
      })
    );
  };

  return (
    <>
      <div className="">
        <div>
          {loading && <Loading />}
          <div className="d-flex justify-content-between">
            <div className="mb-3 w-50">
              <label htmlFor="category_name" className="form-label">
                Name
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="form-control"
                id="category_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3 w-50 ms-3">
              <label htmlFor="category_slug" className="form-label">
                Slug
              </label>
              <input
                type="text"
                placeholder="Slug here"
                className="form-control"
                id="category_slug"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
              />
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <button className="btn btn-primary p-2" onClick={() => setIsEditCategory(false)}>
              Cancel update
            </button>
            <button className="btn btn-warning p-2" onClick={() => submitHandler()}>
              Update category
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateCategory;
