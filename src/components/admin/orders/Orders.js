import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
// import { useDispatch } from "react-redux";
// import { deleteOrderAdmin } from "../../../Redux/Actions/orderActions";

const Orders = (props) => {
  // const dispatch = useDispatch();
  const { orders } = props;

  // const handleDeleteOrder = (id) => {
  //   if (window.confirm(("Are you sure delete order???"))) {
  //     dispatch(deleteOrderAdmin(id));
  //   }
  // }

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Total</th>
          <th scope="col">Paid</th>
          <th scope="col">Date</th>
          <th>Status</th>
          <th scope="col" className="text-end">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {orders &&
          orders.map((order) => (
            <tr key={order._id}>
              <td>
                <b>{`${order.user.name.lenght} >=15` ? `${order.user.name.slice(0, 15)}...` : `${order.user.name}`}</b>
              </td>
              <td>{order.user.email}</td>
              <td>${order.totalPrice}</td>
              <td>
                {order.isPaid ? (
                  <span className="badge3 rounded-pill alert-success fw-bold">
                    Paid At {moment(order.paidAt).format("MMM Do YY")}
                  </span>
                ) : (
                  <span className="badge3 rounded-pill alert-danger fw-bold">Not Paid</span>
                )}
              </td>
              <td>{moment(order.createdAt).format("MMM Do YY")}</td>
              <td>
                {order.isDelivered ? (
                  <span className="badge3 btn-success">Delivered</span>
                ) : (
                  <span className="badge3 btn-dark">Not delivered</span>
                )}
              </td>
              <td className="d-flex justify-content-end align-item-center">
                <Link to={`/admin/order/${order._id}`} className="text-success">
                  <i className="fas fa-eye"></i>
                </Link>
                {/* <Link to="#" className="text-danger ms-3" onClick={() => handleDeleteOrder(order._id)}>
                  <i className="fas fa-trash"></i>
                </Link> */}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Orders;
