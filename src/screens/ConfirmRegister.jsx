import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Toast from "../components/base/LoadingError/Toast";
import { media } from "../assets";
import { userConfirmRegisterAction } from "../Redux/Actions/userActions";

export const ConfirmRegister = ({ location, history }) => {
  // const statusConfirmRegister = useSelector((state) => {
  //   console.log("state.userComfirmRegister", state.userComfirmRegister);
  // });
  const dispatch = useDispatch();
  const emailVerificationToken = location?.search ? location.search.split("=")[1] : 1;
  const handleConfirm = () => {
    dispatch(userConfirmRegisterAction(emailVerificationToken.toString(), history));
    // history.push("/");
  };
  const handleCancel = () => {
    // dispatch(cancelRegister(emailVerificationToken.toString(), history));
  };
  return (
    <>
      <Toast />
      <>
        <div className=" d-flex">
          <div
            className="verify-custom d-flex align-items-center p-0 m-0"
            style={{
              height: "100vh",
              width: "100vw"
            }}
          >
            <div
              className="box-left"
              style={{
                height: "100%",
                width: "50%",
                backgroundImage: `url(${media.images.bg_shoes_01})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                transform: "scaleX(-1)"
              }}
            ></div>
            <form className="box-right text-center py-2 px-2 w-50">
              <h4 className="text-success px-2">Are you ready to register for an account with NBS store?</h4>
              <div className="p-5">
                <button type="button" className="btn btn-outline text-uppercase px-3 py-2">
                  cancel
                </button>
                <img
                  style={{
                    width: "150px"
                  }}
                  src="https://img5.thuthuatphanmem.vn/uploads/2021/12/20/anh-dong-welcome-cute-de-thuong_075923337.gif"
                  alt=""
                />
                <button
                  type="button"
                  className="btn btn-success text-uppercase px-3 py-2"
                  onClick={() => handleConfirm()}
                >
                  accept
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    </>
  );
};
