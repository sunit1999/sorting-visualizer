import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/Root/Root";
import { configureStore } from "./configureStore";
import "./index.css";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Root store={store} />
  </React.StrictMode>,
  document.getElementById("root")
);
