import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home/Home.jsx";

import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./Routes";


ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <MainRoutes/>
    </BrowserRouter>
);
