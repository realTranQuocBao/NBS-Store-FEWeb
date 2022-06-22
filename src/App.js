import React, { useEffect } from "react";
import "../src/css/App.css";
import "../src/css/responsive.css";
import "./css/grid.css";
import "./css/base.css";
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
// import NotFound from "./screens/NotFound";
//admin
import "../src/css/AdminApp.css";
import "../src/css/AdminResponsive.css";
import "react-toastify/dist/ReactToastify.css";
import HomeScreenAdmin from "./screens/admin/HomeScreenAdmin";
import ProductScreenAdmin from "./screens/admin/ProductScreen";
import CategoriesScreenAdmin from "./screens/admin/CategoriesScreen";
import OrderScreenAdmin from "./screens/admin/OrderScreen";
import OrderDetailScreenAdmin from "./screens/admin/OrderDetailScreen";
import AddProductAdmin from "./screens/admin/AddProduct";
import LoginAdmin from "./screens/admin/LoginScreen";
import UsersScreenAdmin from "./screens/admin/UsersScreen";
import ProductEditScreenAdmin from "./screens/admin/ProductEditScreen";
import NotFoundAdmin from "./screens/admin/NotFoundAdmin";
import {PrivateRouter,AdminPrivateRouter} from "./PrivateRouter";
import { useDispatch, useSelector } from "react-redux";
import { listProductsAdmin } from "./Redux/Actions/productActions";
import { listOrders } from "./Redux/Actions/orderActions";
import NotFound from "./screens/NotFound";

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
        <Route path="/search/:keyword" component={HomeScreen} exact />
        <Route path="/page/:pagenumber" component={HomeScreen} exact />
        <Route
          path="/search/:keyword/page/:pageNumber"
          component={HomeScreen}
          exact
        />
        <Route path="/products/:id" component={SingleProduct} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRouter path="/profile" component={ProfileScreen} />
        <Route path="/cart/:id?" component={CartScreen} />
        <PrivateRouter path="/shipping" component={ShippingScreen} />
        <PrivateRouter path="/payment" component={PaymentScreen} />
        <PrivateRouter path="/placeorder" component={PlaceOrderScreen} />
        <PrivateRouter path="/order/:id" component={OrderScreen} />

        {/* ADMIN */}
        <AdminPrivateRouter path="/admin" component={HomeScreenAdmin} exact />
        <AdminPrivateRouter path="/admin/products" component={ProductScreenAdmin} exact />
        <Route path="/admin/search/:keyword"
          component={ProductScreenAdmin} exact />
        <Route path="/admin/products/page/:pagenumber"
          component={ProductScreenAdmin} exact />
        <Route
          path="/admin/search/:keyword/page/:pageNumber"
          component={ProductScreenAdmin}
          exact
        />
        <AdminPrivateRouter path="/admin/category" component={CategoriesScreenAdmin} />
        <AdminPrivateRouter path="/admin/orders" component={OrderScreenAdmin} />
        <AdminPrivateRouter path="/admin/order/:id" component={OrderDetailScreenAdmin} />
        <AdminPrivateRouter path="/admin/addproduct" component={AddProductAdmin} />
        <AdminPrivateRouter path="/admin/users" component={UsersScreenAdmin} />
        <AdminPrivateRouter path="/admin/product/:id/edit" component={ProductEditScreenAdmin} />
        <Route path="/admin/login" component={LoginAdmin} />
        <AdminPrivateRouter path="/admin/*" component={NotFoundAdmin} />
        <Route path="*" component={NotFound} />

      </Switch>
    </Router>
  );
};

export default App;
