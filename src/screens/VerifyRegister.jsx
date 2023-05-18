import React, { useState } from "react";
import { media } from "../assets";
export const VerifyRegister = ({ location, history }) => {
  const [loading, setLoading] = useState(false);
  const email = location.search ? location.search.split("=")[1] : "nulll";
  return (
    <>
      <div className=" d-flex">
        <div
          className="verify-custom d-flex align-items-center p-0 m-0"
          style={{
            // position: "relative",
            // top: "50%",
            // transform: "translate(0,-50%)"
            height: "100vh",
            width: "100vw"
          }}
        >
          <div
            className="box-left"
            style={{
              height: "100%",
              width: "50%",
              backgroundImage: `url(${media.images.banner02})`,
              backgroundPosition: "center",
              backgroundSize: "cover"
            }}
          ></div>
          <form className="box-right text-center py-2 px-2 w-50">
            <h4 className="text-success">Please verify your email address now.</h4>
            <div className="p-5">
              <img
                style={{
                  width: "150px"
                }}
                src="https://cdn-icons-png.flaticon.com/512/912/912023.png"
                alt=""
              />
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <p
                style={{
                  width: "75%",
                  fontSize: "16px",
                  linHeight: "19px",
                  marginBlockEnd: "1em",
                  marginInlineStart: "0px",
                  marginInlineEnd: "0px"
                }}
              >
                Thanks for signing up! To activate your account, just check your{" "}
                <span className="text-success fw-bold">{email?.toString()}</span> inbox for our email and click the
                verification link inside. The link will expire soon, so act fast!
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <p
                style={{
                  fontWeight: 600,
                  marginRight: "5px"
                }}
              >
                Don't see an email?
              </p>
              <p>Check your spam folder.</p>
            </div>
            <div></div>
          </form>
        </div>
      </div>
    </>
  );
};
