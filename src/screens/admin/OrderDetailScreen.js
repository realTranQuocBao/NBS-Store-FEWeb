import React from "react";
import Sidebar from "./../../components/admin/Sidebar";
import Header from "./../../components/admin/Header";
import OrderDetailmain from "../../components/admin/orders/OrderDetailMain";

const OrderDetailScreen = ({ match }) => {
  const orderId = match.params.id;
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <OrderDetailmain orderId={orderId} />
      </main>
    </>
  );
};

export default OrderDetailScreen;
