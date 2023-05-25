import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getCartListItem } from "../Redux/Actions/cartActions";
import { logout } from "./../Redux/Actions/userActions";
import TrendingSearch from "./searchComponents/TrendingSearch";
// import Sidebar from "./sidebar/Sidebar";

const Header = () => {
    const [keyword, setKeyword] = useState();
    const dispatch = useDispatch();
    let history = useHistory();

    const cart = useSelector((state) => {
        return state.cartListItem.cartUser ?? state.cartListItem;
    });
    const { cartItems } = cart;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        dispatch(getCartListItem());
    }, [dispatch]);

    const logoutHandler = () => {
        dispatch(logout());
    };

    // search handler
    const submitHandler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            history.push(`/search/${keyword}`);
        } else {
            history.push("/");
        }
    };

    const onAvatarLoadError = (e) => {
        e.currentTarget.onerror = null; // prevents looping
        e.currentTarget.src = `${window.location.origin}/images/avatar/default.png`;
    };

    return (
      <div>
        {/* Top Header */}
        <div className="Announcement ">
          <div className="container">
            <div className="row">
              <div className="col-md-6 d-flex align-items-center display-none">
                <p>+0909 0009</p>
                <p>info.nbsstore@gmail.com</p>
              </div>
              <div className=" col-12 col-lg-6 justify-content-center justify-content-lg-end d-flex align-items-center">
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/nbs.store.cn19b">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/">
                  <i className="fab fa-instagram"></i>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/">
                  <i className="fab fa-youtube"></i>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.pinterest.com/">
                  <i className="fab fa-pinterest-p"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Header */}
        <div className="header">
          <div className="container">
            {/* Toggle menu */}
            {/* <Sidebar /> */}

            {/* MOBILE HEADER */}
            <div className="mobile-header mb-3">
              <div className="container ">
                <div className="row ">
                  <div className="col-6 d-flex align-items-center">
                    <Link className="navbar-brand" to="/">
                      <img alt="logo" src="/images/logo.png" />
                    </Link>
                  </div>
                  <div className="col-6 d-flex align-items-center justify-content-end Login-Register">
                    {userInfo ? (
                      <div className="btn-group">
                        <button
                          type="button"
                          className="name-button dropdown-toggle"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="fas fa-user"></i>
                        </button>
                        <div className="dropdown-menu">
                          <Link className="dropdown-item" to="/profile">
                            Profile
                          </Link>
                          {userInfo?.isAdmin === true && (
                            <Link className="dropdown-item" to="/admin">
                              Admin page
                            </Link>
                          )}
                          <Link className="dropdown-item" to="#" onClick={logoutHandler}>
                            Logout
                          </Link>
                        </div>
                      </div>
                    ) : (
                      <div className="btn-group">
                        <button
                          type="button"
                          className="name-button dropdown-toggle"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="fas fa-user"></i>
                        </button>
                        <div className="dropdown-menu">
                          <Link className="dropdown-item" to="/login">
                            Login
                          </Link>

                          <Link className="dropdown-item" to="/register">
                            Register
                          </Link>
                        </div>
                      </div>
                    )}

                    <Link to="/cart" className="cart-mobile-icon">
                      <i className="fas fa-shopping-bag"></i>
                      <span className="badge">{cartItems?.length}</span>
                    </Link>
                  </div>
                  <div className="col-12 d-flex align-items-center">
                    <form onSubmit={submitHandler} className="input-group">
                      <input
                        type="search"
                        className="form-control rounded search"
                        placeholder="Search"
                        // value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                      />
                      <button type="submit" className="search-button">
                        search
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* PC HEADER */}
            <div className="pc-header">
              <div className="row">
                <div className="col-md-3 col-4 d-flex align-items-center">
                  <Link className="navbar-brand" to="/">
                    <img alt="logo" src="/images/logo.png" />
                  </Link>
                </div>
                <div className="col-md-6 col-4 d-flex flex-column">
                  <form onSubmit={submitHandler} className="input-group">
                    <input
                      type="search"
                      className="form-control rounded search"
                      placeholder="Search"
                      onChange={(e) => setKeyword(e.target.value)}
                    />
                    <button type="submit" className="search-button">
                      search
                    </button>
                  </form>
                  <div className="trending-search">
                    <TrendingSearch />
                  </div>
                </div>
                <div className="col-md-3 d-flex align-items-center justify-content-end Login-Register">
                  {userInfo ? (
                    <div className="btn-group">
                      <img
                        className="img-xs rounded-circle"
                        src={userInfo?.avatarUrl}
                        onError={onAvatarLoadError}
                        alt="User avatar"
                      />
                      <button
                        type="button"
                        className="name-button dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Hi,{" "}
                        {`${userInfo?.name.length} >= 10`
                          ? `  ${userInfo?.name.slice(0, 10)}...`
                          : `  ${userInfo?.name}`}
                      </button>
                      <div className="dropdown-menu">
                        <Link className="dropdown-item" to="/profile">
                          Profile
                        </Link>
                        {userInfo?.isAdmin === true && (
                          <Link className="dropdown-item" to="/admin">
                            Admin page
                          </Link>
                        )}
                        <Link className="dropdown-item" to="#" onClick={logoutHandler}>
                          Logout
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <>
                      <button className="name-button">
                        <Link to="/register">Register</Link>
                      </button>

                      <button className="name-button">
                        <Link to="/login">Login</Link>
                      </button>
                    </>
                  )}

                  <Link to="/cart">
                    <i className="fas fa-shopping-bag"></i>
                    <span className="badge">{cartItems?.length}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Header;
