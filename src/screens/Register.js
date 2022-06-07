import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { userRegisterAction } from "../Redux/Actions/userActions";

import { useFormik } from 'formik';
import * as Yup from 'yup';
import Message from '../components/base/LoadingError/Error';
import Loading from '../components/base/LoadingError/Loading';
// import '../../asset/styles/signup.css';

const Register = ({ location, history }) => {
    window.scrollTo(0, 0);
    const redirect = location.search ? location.search.split("=")[1] : "/";

    const dispatch = useDispatch();
    const userRegister = useSelector(state => state.userRegister);
    const { loading, error, userInfo } = userRegister;
    useEffect(() => {
        if (userInfo) {
            history.push(redirect);
        }
    }, [history, location, userInfo, redirect]);

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirmedPassword: ""
        },
        validationSchema: Yup.object({

            name: Yup.string().required("Value required").min(1, "Name must be at least 1 characters").max(250, "Name must be less than 250 characters"),
            email: Yup.string().required("Value required").matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "Please enter a valid email address"),
            password: Yup.string().required("Value required").matches(/^(\S)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}[\]|\\:;"'<>,.?/_₹])[a-zA-Z0-9~`!@#$%^&*()--+={}[\]|\\:;"'<>,.?/_₹]{6,16}$/, "Password must be least 6 to 16 characters long and contain only letters, numbers, a special character"),
            confirmedPassword: Yup.string().required("Value required").oneOf([Yup.ref("password"), null], "Password must match"),

        }),
        onSubmit: (value) => {
            // console.log(value);
            dispatch(userRegisterAction(value.name, value.email, value.password));
        }
    })

    return (
        <>
            <Header />
            <div className="container d-flex flex-column justify-content-center align-items-center login-center">
                {loading && <Loading />}
                <form className="Login col-md-8 col-lg-4 col-11"
                    onSubmit={formik.handleSubmit}>
                    <h5 className='form-title'>Register</h5>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                    />
                    <div className='frame-error'>
                        {formik.errors.name &&
                            <span className="error-message">{formik.errors.name}</span>
                        }
                    </div>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                    <div className='frame-error'>
                        {error &&
                            <Message variant="alert-danger">{error}</Message>}
                        {formik.errors.email &&
                            <span className="error-message">{formik.errors.email}</span>
                        }
                    </div>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />
                    <div className='frame-error'>
                        {formik.errors.password &&
                            <span className="error-message">{formik.errors.password}</span>
                        }
                    </div>
                    <input
                        type="password"
                        id="confirmedPassword"
                        name="confirmedPassword"
                        placeholder="Confirm your password"
                        value={formik.values.confirmedPassword}
                        onChange={formik.handleChange}
                    />
                    <div className='frame-error'>
                        {formik.errors.confirmedPassword &&
                            <span className="error-message">{formik.errors.confirmedPassword}</span>
                        }
                    </div>

                    <button type="submit"> Register </button>
                    <p>
                        <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
                            I Have Account <strong>Login</strong>
                        </Link>
                    </p>
                </form>
            </div>
        </>
    )
}

export default Register