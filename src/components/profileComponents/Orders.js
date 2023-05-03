import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import Message from "../base/LoadingError/Error";
import Loading from "../base/LoadingError/Loading";

const Orders = (props) => {
  const { loading, error, orders } = props;
  return (
    <div className=" d-flex justify-content-center align-items-center flex-column">
      <p className="d-flex flex-end fw-bold border-bottom border-secondary rounded">TOTAL ORDER: {orders?.length}</p>
      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant="alert-danger">{error}</Message>
      ) : (
        <>
          {orders?.length === 0 ? (
            <div className="col-12 alert alert-info text-center mt-3">
              No Orders
              <Link
                className="btn btn-bg-main mx-2 px-3 py-2"
                to="/"
                style={{
                  fontSize: "12px"
                }}
              >
                START SHOPPING
              </Link>
            </div>
          ) : (
            <div className="shadow-sm table-responsive">
              {orders?.map((order) => (
                <div key={order._id} className=" p-3 mb-3 bg-body rounded shadow">
                  <div className="d-flex align-items-center justify-content-between mb-1">
                    <p className="fs-6">
                      <span className="fw-bold">Order ID:</span>&nbsp;
                      <a href={`/order/${order._id}`} className="">
                        {order._id}
                      </a>
                    </p>
                  </div>
                  {order?.orderItems?.map((item) => (
                    <div key={item._id} className="d-flex align-items-center justify-content-between">
                      <div className="p-2" style={{ maxWidth: "100px", backgroundSize: "cover" }}>
                        <img src={item.image} alt={item.name} />
                      </div>
                      <div className="d-flex flex-start flex-column w-75">
                        <a href={`/order/${order._id}`}>
                          <p className="fs-6 text-lowercase">
                            {item.name.length > 30 ? item.name.slice(0, 30) : item.name}
                          </p>
                        </a>
                        <p className="fw-normal fs-6 text-danger fst-italic">x{item.qty}</p>
                      </div>
                      <div className="fw-bold">{item.price}$</div>
                    </div>
                  ))}
                  {/* PC */}
                  <div className="pc-order d-flex justify-content-between align-items-center p-3 border-top border-secondary rounded">
                    <div className="fs-6">
                      {order.isPaid ? (
                        <span className="text-success border border-success rounded-pill ps-2 pe-2">
                          <i className="fas fa-dollar-sign"></i> Paid {moment(order.paidAt).calendar()}
                        </span>
                      ) : (
                        <span className="text-danger border border-danger rounded-pill ps-2 pe-2">
                          <i className="fas fa-dollar-sign"></i> Not Paid
                        </span>
                      )}
                    </div>
                    <i className="fas fa-long-arrow-alt-right fs-4 opacity-50"></i>
                    <div className="fs-6">
                      {order.isDelivered ? (
                        <span className="text-success border border-success rounded-pill ps-2 pe-2">
                          <i className="fas fa-truck"></i> Delivered
                        </span>
                      ) : (
                        <span className="text-danger border border-danger rounded-pill ps-2 pe-2">
                          <i className="fas fa-truck"></i> Not Delivered
                        </span>
                      )}
                    </div>
                    <div className="fw-bold">
                      Order Total:{" "}
                      <span className="fs-5 text-danger">
                        {order.totalPrice}
                        <i className="fas fa-dollar-sign fs-6 align-text-top fw-normal"></i>
                      </span>
                    </div>
                  </div>
                  {/* mobile */}
                  <div className="mobile-order d-flex flex-column align-items-center p-3 border-top border-secondary rounded">
                    <div className="d-flex">
                      <div className="fs-6">
                        {order.isPaid ? (
                          <span className="text-success border border-success rounded-pill ps-2 pe-2">
                            <i className="fas fa-dollar-sign"></i> Paid {moment(order.paidAt).calendar()}
                          </span>
                        ) : (
                          <span className="text-danger border border-danger rounded-pill ps-2 pe-2">
                            <i className="fas fa-dollar-sign"></i> Not Paid
                          </span>
                        )}
                      </div>
                      <i className="fas fa-long-arrow-alt-right fs-4 opacity-50 ms-2 me-2"></i>
                      <div className="fs-6">
                        {order.isDelivered ? (
                          <span className="text-success border border-success rounded-pill ps-2 pe-2">
                            <i className="fas fa-truck"></i> Delivered
                          </span>
                        ) : (
                          <span className="text-danger border border-danger rounded-pill ps-2 pe-2">
                            <i className="fas fa-truck"></i> Not Delivered
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="fw-bold mt-3">
                      Order Total:{" "}
                      <span className="fs-5 text-danger">
                        {order.totalPrice}
                        <i className="fas fa-dollar-sign fs-6 align-text-top fw-normal"></i>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              {/* <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>STATUS</th>
                    <th>DATE</th>
                    <th>TOTAL</th>
                  </tr>
                </thead>
                <tbody>

                  {orders && orders.map((order) => (
                    <tr
                      className={`${
                        order.isPaid ? "alert-success" : "alert-danger"
                      }`}
                      key={order._id}
                    >
                      <td>
                        <a href={`/order/${order._id}`} className="link">
                          {order._id}
                        </a>
                      </td>
                      <td>{order.isPaid ? <>Paid</> : <>Not Paid</>}</td>
                      <td>
                        {order.isPaid
                          ? moment(order.paidAt).calendar()
                          : moment(order.createdAt).calendar()}
                      </td>
                      <td>${order.totalPrice}</td>
                    </tr>
                  ))}
                </tbody>
              </table> */}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Orders;
