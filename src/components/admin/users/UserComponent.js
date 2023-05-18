import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listUser } from "./../../../Redux/Actions/userActions";
import Loading from "./../../base/LoadingError/Loading";
import Message from "./../../base/LoadingError/Error";
import { Checkbox } from "antd";

const UserComponent = () => {
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  const onAvatarLoadError = (e) => {
    e.currentTarget.onerror = null; // prevents looping
    e.currentTarget.src = `${window.location.origin}/images/avatar/default.png`;
  };
  useEffect(() => {
    dispatch(listUser());
  }, [dispatch]);
  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Customers</h2>
        <div>
          <Link to="#" className="btn btn-primary btn-size">
            <i className="material-icons md-plus"></i> Create new
          </Link>
        </div>
      </div>

      <div className="card mb-4">
        <header className="card-header">
          <div className="row gx-3">
            <div className="col-lg-4 col-md-6 me-auto">
              <input type="text" placeholder="Search..." className="form-control" />
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>Show 20</option>
                <option>Show 30</option>
                <option>Show 40</option>
                <option>Show all</option>
              </select>
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>Status: all</option>
                <option>Active only</option>
                <option>Disabled</option>
              </select>
            </div>
          </div>
        </header>

        {/* Card */}
        <div className="card-body">
          {loading ? (
            <Loading />
          ) : error ? (
            <Message variant="alert-danger">{error}</Message>
          ) : (
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
              {users &&
                users.map((user) => (
                  <div className="col" key={user._id}>
                    <div className="card card-user shadow-sm">
                      <div
                        className="p-2"
                        style={{
                          position: "absolute",
                          top: "0",
                          left: "0",
                          zIndex: "1",
                          color: "#fff"
                        }}
                      >
                        <Checkbox />
                      </div>
                      <div
                        className="dropdown"
                        style={{
                          position: "absolute",
                          top: "0",
                          right: "0",
                          zIndex: "1",
                          color: "#fff"
                        }}
                      >
                        <Link to="#" data-bs-toggle="dropdown" className="btn text-white">
                          <i className="fas fa-ellipsis-v"></i>
                        </Link>
                        <div className="dropdown-menu">
                          <Link className="dropdown-item" to={`/admin/product/`}>
                            Send email
                          </Link>
                          <Link to="#" className="dropdown-item text-danger">
                            Disable
                          </Link>
                        </div>
                      </div>
                      <div className="card-header">
                        <img
                          className="img-md img-avatar"
                          src={user.avatarUrl}
                          onError={onAvatarLoadError}
                          alt="User pic"
                        />
                      </div>
                      <div className="card-body">
                        <h5 className="card-title mt-5" title={user.name}>
                          {`${user.name.length} >= 15` ? `${user.name.slice(0, 15)}...` : `${user.name}`}
                        </h5>
                        <div className="card-text text-muted">
                          {user.isAdmin === true ? <p className="m-0">Admin</p> : <p className="m-0">Customer</p>}

                          <p>
                            <a href={`mailto:${user.email}`} title={user.email}>
                              {`${user.email.length} >= 15` ? `${user.email.slice(0, 20)}...` : `${user.email}`}
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}

          {/* nav */}
          <nav className="float-end mt-4" aria-label="Page navigation">
            <ul className="pagination">
              <li className="page-item disabled">
                <Link className="page-link" to="#">
                  Previous
                </Link>
              </li>
              <li className="page-item active">
                <Link className="page-link" to="#">
                  1
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  Next
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default UserComponent;
