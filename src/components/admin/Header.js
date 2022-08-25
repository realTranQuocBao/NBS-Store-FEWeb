import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/Actions/userActions";
import { useHistory } from "react-router-dom";

const Header = () => {
    const [keyword, setKeyword] = useState();
    let history = useHistory();

    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const onAvatarLoadError = (e) => {
        e.currentTarget.onerror = null; // prevents looping
        e.currentTarget.src = `${window.location.origin}/images/avatar/default.png`;
    };
    useEffect(() => {
        $("[data-trigger]").on("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            var offcanvas_id = $(this).attr("data-trigger");
            $(offcanvas_id).toggleClass("show");
        });

        $(".btn-aside-minimize").on("click", function () {
            if (window.innerWidth < 768) {
                $("body").removeClass("aside-mini");
                $(".navbar-aside").removeClass("show");
            } else {
                // minimize sidebar on desktop
                $("body").toggleClass("aside-mini");
            }
        });
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            history.push(`/admin/search/${keyword}`);
        } else {
            history.push(`/admin`);
        }
    };

    const logoutHandler = () => {
        dispatch(logout());
    };

    return (
        <header className="main-header navbar">
            <div className="col-search">
                <form className="searchform" onSubmit={submitHandler}>
                    <div className="input-group search-wrap-admin">
                        <input
                            list="search_terms"
                            type="text"
                            className="form-control input-search-admin"
                            placeholder="Search term"
                            onChange={(e) => setKeyword(e.target.value)}
                        />
                        <button className="btn btn-light bg btn-search-admin" type="submit">
                            <i className="far fa-search icon-search-admin"></i>
                        </button>
                    </div>
                    <datalist id="search_terms">
                        <option value="Products" />
                        <option value="New orders" />
                        <option value="Apple iphone" />
                        <option value="Ahmed Hassan" />
                    </datalist>
                </form>
            </div>
            <div className="col-nav">
                <button className="btn btn-icon btn-mobile me-auto" data-trigger="#offcanvas_aside">
                    <i className="md-28 fas fa-bars"></i>
                </button>
                <ul className="nav">
                    <li className="nav-item">
                        <Link className={`nav-link btn-icon `} title="Dark mode" to="#">
                            <i className="fas fa-moon"></i>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link btn-icon" to="#">
                            <i className="fas fa-bell"></i>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">
                            English
                        </Link>
                    </li>
                    <li className="dropdown nav-item">
                        <Link className="dropdown-toggle" data-bs-toggle="dropdown" to="#">
                            <img
                                className="img-xs rounded-circle"
                                src={userInfo.avatarUrl}
                                onError={onAvatarLoadError}
                                alt="User"
                            />
                        </Link>
                        <div className="dropdown-menu dropdown-menu-end">
                            <Link className="dropdown-item" to="/profile">
                                My profile
                            </Link>
                            <Link className="dropdown-item" to="#">
                                Settings
                            </Link>
                            <Link onClick={logoutHandler} className="dropdown-item text-danger" to="#">
                                Exit
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
