import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { userRegisterAction } from "../Redux/Actions/userActions";

import { useFormik } from "formik";
import * as Yup from "yup";
import Message from "../components/base/LoadingError/Error";
import Loading from "../components/base/LoadingError/Loading";
import { toast } from "react-toastify";

/* Modal verify register */
// const ModalVerifyNotifi = (props) => {
//   return (
//     <div>
//       <div
//         className="modal"
//         id="exampleModal"
//         tabIndex="-1"
//         role="dialog"
//         aria-labelledby="exampleModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog" role="document">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title">{props.title}</h5>
//               <button type="button" className="close btn" data-dismiss="modal" aria-label="Close" onClick={hideModal}>
//                 <i className="fas fa-times"></i>
//               </button>
//             </div>
//             <div className="modal-body">
//               <div className="d-flex items-center justify-content-center py-3">
//                 <i
//                   className="fas fa-envelope-open-text"
//                   style={{
//                     fontSize: "64px",
//                     color: "#014c8f"
//                   }}
//                 ></i>
//               </div>

//               <p>
//                 {props.body} <br />
//                 <br />
//                 <a
//                   target="_blank"
//                   rel="noreferrer"
//                   className="text-primary font-weight-bold"
//                   href="https://mail.google.com/mail/"
//                   alt="email"
//                 >
//                   Quick access is available here
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="fade show"></div>
//     </div>
//   );
// };

// function showModal() {
//   const modal = document.querySelector(".modal");
//   const backdrop = document.querySelector(".show");

//   modal.classList.add("show");
//   modal.style.display = "block";

//   backdrop.classList.add("modal-backdrop");
//   backdrop.style.display = "block";
// }

// function hideModal() {
//   const modal = document.querySelector(".modal");
//   const backdrop = document.querySelector(".modal-backdrop");

//   modal.classList.remove("show");
//   modal.style.display = "none";

//   backdrop.classList.remove("modal-backdrop");
// }
const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: true,
  autoClose: 2000
};
const Register = ({ location, history }) => {
  window.scrollTo(0, 0);
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;
  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, location, userInfo, redirect]);

  // Handle submit form
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmedPassword: ""
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Value required")
        .min(1, "Name must be at least 1 characters")
        .max(250, "Name must be less than 250 characters"),
      email: Yup.string()
        .required("Value required")
        .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "Please enter a valid email address"),
      password: Yup.string()
        .required("Value required")
        .matches(
          /^(\S)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}[\]|\\:;"'<>,.?/_₹])[a-zA-Z0-9~`!@#$%^&*()--+={}[\]|\\:;"'<>,.?/_₹]{6,16}$/,
          "Password must be least 6 to 16 characters long and contain only letters, numbers, a special character"
        ),
      confirmedPassword: Yup.string()
        .required("Value required")
        .oneOf([Yup.ref("password"), null], "Password must match")
    }),
    onSubmit: (value) => {
      dispatch(userRegisterAction(value.name, value.email, value.password, history));
    }
  });

  return (
    <>
      <Header />
      <div className="container d-flex flex-column justify-content-center align-items-center login-center">
        {loading && <Loading />}
        <form className="Login col-md-8 col-lg-4 col-11" onSubmit={formik.handleSubmit}>
          <h5 className="form-title">Register</h5>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          <div className="frame-error">
            {formik.errors.name && <span className="error-message">{formik.errors.name}</span>}
          </div>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <div className="frame-error">
            {error && <Message variant="alert-danger">{error}</Message>}
            {formik.errors.email && <span className="error-message">{formik.errors.email}</span>}
          </div>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <div className="frame-error">
            {formik.errors.password && <span className="error-message">{formik.errors.password}</span>}
          </div>
          <input
            type="password"
            id="confirmedPassword"
            name="confirmedPassword"
            placeholder="Confirm your password"
            value={formik.values.confirmedPassword}
            onChange={formik.handleChange}
          />
          <div className="frame-error">
            {formik.errors.confirmedPassword && (
              <span className="error-message">{formik.errors.confirmedPassword}</span>
            )}
          </div>

          <button type="submit" data-toggle="modal">
            {" "}
            Register{" "}
          </button>
          <p>
            <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
              I Have Account <strong>Login</strong>
            </Link>
          </p>
        </form>
      </div>
      {/* <ModalVerifyNotifi
        title="Account Verification Notice"
        body={`To verify your account, please visit your email account 
          ${emailShow}
         to activate your account.`}
      /> */}
    </>
  );
};

export default Register;
