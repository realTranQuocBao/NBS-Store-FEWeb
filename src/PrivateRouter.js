import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

// user
export function PrivateRouter({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            component={(props) => {
                const token = window.localStorage.getItem("userInfo");
                if (token) {
                    return <Component {...props} />;
                } else {
                    return <Redirect to={"/login"} />;
                }
            }}
        />
    );
}
// admin
export function AdminPrivateRouter({ component: Component, ...rest }) {
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    return (
        <Route
            {...rest}
            component={(props) => {
                if (userInfo && userInfo.isAdmin) {
                    return <Component {...props} />;
                } else {
                    return <Redirect to={`/admin`} />;
                }
            }}
        />
    );
}

// export default {PrivateRouter,AdminPrivateRouter};
