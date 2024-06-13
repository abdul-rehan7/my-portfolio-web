import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Loader from "./components/Loader";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Loader />
    <App />
  </BrowserRouter>
);
