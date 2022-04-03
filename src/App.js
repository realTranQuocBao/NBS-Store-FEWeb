import React, { useEffect } from "react";
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import SingleProduct from "./screens/SingleProduct";
import Login from "./screens/Login";
import Register from "./screens/Register";
import CartScreen from "./screens/CartScreen";
import ShippingScreen from "./screens/ShippingScreen";
import ProfileScreen from "./screens/ProfileScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import NotFound from "./screens/NotFound";
//admin
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import HomeScreenAdmin from "./screens/admin/HomeScreen";
import ProductScreenAdmin from "./screens/admin/ProductScreen";
import CategoriesScreenAdmin from "./screens/admin/CategoriesScreen";
import OrderScreenAdmin from "./screens/admin/OrderScreen";
import OrderDetailScreenAdmin from "./screens/admin/OrderDetailScreen";
import AddProductAdmin from "./screens/admin/AddProduct";
import LoginAdmin from "./screens/admin/LoginScreen";
import UsersScreenAdmin from "./screens/admin/UsersScreen";
import ProductEditScreenAdmin from "./screens/admin/ProductEditScreen";
import NotFoundAdmin from "./screens/admin/NotFound";
import PrivateRouter from "./PrivateRouter";
import { useDispatch, useSelector } from "react-redux";
import { listProductsAdmin } from "./Redux/Actions/productActions";
import { listOrders } from "./Redux/Actions/orderActions";

const App = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listProductsAdmin());
      dispatch(listOrders());
    }
  }, [dispatch, userInfo]);

  return (
    <Router>
      <Switch>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/products/:id" component={SingleProduct} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={ProfileScreen} />
        <Route path="/cart/:id?" component={CartScreen} />
        <Route path="/shipping" component={ShippingScreen} />
        <Route path="/payment" component={PaymentScreen} />
        <Route path="/placeorder" component={PlaceOrderScreen} />
        <Route path="/order:id" component={OrderScreen} />
        <PrivateRouter path="/admin" component={HomeScreenAdmin} exact />
        <Route path="*" component={NotFound} />
        {/* ADMIN */}
        <PrivateRouter path="/admin/products" component={ProductScreenAdmin} />
        <PrivateRouter path="/admin/category" component={CategoriesScreenAdmin} />
        <PrivateRouter path="/admin/orders" component={OrderScreenAdmin} />
        <PrivateRouter path="/admin/order/:id" component={OrderDetailScreenAdmin} />
        <PrivateRouter path="/admin/addproduct" component={AddProductAdmin} />
        <PrivateRouter path="/admin/users" component={UsersScreenAdmin} />
        <PrivateRouter path="/admin/product/:id/edit" component={ProductEditScreenAdmin} />
        <Route path="/admin/login" component={LoginAdmin} />
        <PrivateRouter path="*" component={NotFoundAdmin} />
      </Switch>
    </Router>
  );
};

export default App;
