import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./Redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
    <Provider store={store}>
        
        console.log("helloooooooooo")
        <App />
    </Provider>
    , document.getElementById("root"));
