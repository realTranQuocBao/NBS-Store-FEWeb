import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { updateCategoryAdmin } from '../../../Redux/Actions/categoryActions';
import { CATEGORY_UPDATE_RESET } from '../../../Redux/Constants/categoryConstants';
import Loading from '../../base/LoadingError/Loading';

const ToastObjects = {
    pauseOnFocusLoss: false,
    draggable: false,
    pauseOnHover: false,
    autoClose: 2000,
};
const UpdateCategory = ({ currentCategory }) => {
    const [name, setName] = useState("");

    const dispatch = useDispatch();

    const categoryListAdmin = useSelector((state) => state.categoryListAdmin);
    const { category } = categoryListAdmin;

    const categoryUpdateAdmin = useSelector((state) => state.categoryUpdateAdmin);
    const {
        loading,
        success,
        error
    } = categoryUpdateAdmin;

    useEffect(() => {
        setName(category[currentCategory]?.name);
    }, [dispatch, category, currentCategory]);

    useEffect(() => {
        if (success) {
            toast.success("Category Updated", ToastObjects);
        }
        if (error) {
            toast.success(error, ToastObjects);
        }
        dispatch({ type: CATEGORY_UPDATE_RESET })
    }, [dispatch, success, error]);

    const submitHandler = (e) => {
        e.preventdefault();
        dispatch(updateCategoryAdmin({
            name
        }));
    }

    return (
        <>
            <div className="col-md-12 col-lg-4">
                <form onSubmit={submitHandler}>
                    {loading && <Loading />}
                    <div className="mb-4">
                        <label htmlFor="category_name" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="form-control"
                            id="category_name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className="d-flex justify-content-between">
                        <Link
                            to="/admin/category"
                            type="submit"
                            className="btn btn-size btn-secondary">
                            Cancel
                        </Link>
                        <button
                            type="submit"
                            className="btn btn-size btn-warning">
                            Update category
                        </button>
                    </div>
                </form>
            </div>
        </>
    );

}

export default UpdateCategory