import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router.jsx";
import AuthContext from "./provider/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContext>
    <RouterProvider router={router} />
  </AuthContext>
);
