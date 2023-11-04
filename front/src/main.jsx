import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
//import "../index.css";
import axios from "axios";
import { Provider } from "react-redux";
import store from "./redux/store.js";

axios.defaults.baseURL = "frontsrcassetsBACKGOUDN_IMAGE_LANDING.png";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);