import React, { useEffect } from "react";
import Message from "./../../base/LoadingError/Error";
import Loading from "./../../base/LoadingError/Loading";
import Orders from "./Orders";
import { useDispatch, useSelector } from "react-redux";
import { listOrders } from "../../../Redux/Actions/orderActions";
import { toast } from "react-toastify";
import { ORDER_DELETE_RESET } from "../../../Redux/Constants/orderConstants";
import Toast from "../../base/LoadingError/Toast";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};
const OrderMain = () => {
  const dispatch = useDispatch();
  const orderListAdmin = useSelector((state) => state.orderListAdmin);
  const { loading, error, orders } = orderListAdmin;

  const deleteOrder = useSelector(state => state.orderDeleteAdmin);
  const { success: successDelOrder, error: errorDelOrder } = deleteOrder;

  useEffect(() => {
    if (successDelOrder) {
      toast.success("Delete order success!!!", ToastObjects);
    }
    if (errorDelOrder) {
      toast.error(errorDelOrder, ToastObjects);
    }
    dispatch({ type: ORDER_DELETE_RESET });
  }, [dispatch, successDelOrder, errorDelOrder]);

  useEffect(() => {
    dispatch(listOrders())
  }, [dispatch, successDelOrder]);

  return (
    <section className="content-main">
      <Toast />
      <div className="content-header">
        <h2 className="content-title">Orders</h2>
      </div>

      <div className="card mb-4 shadow-sm">
        <header className="card-header bg-white">
          <div className="row gx-3 py-3">
            <div className="col-lg-4 col-md-6 me-auto">
              <input
                type="text"
                placeholder="Search..."
                className="form-control p-2"
              />
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>Status</option>
                <option>Active</option>
                <option>Disabled</option>
                <option>Show all</option>
              </select>
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>Show 20</option>
                <option>Show 30</option>
                <option>Show 40</option>
              </select>
            </div>
          </div>
        </header>
        <div className="card-body">
          <div className="table-responsive">
            {loading ? (
              <Loading />
            ) : error ? (
              <Message variant="alert-danger">{error}</Message>
            ) : (
              <Orders orders={orders} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderMain;
