import React, { useContext } from "react";
import { authContext } from "../provider/AuthContext";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const { loading, user } = useContext(authContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="container min-h-[500px] flex justify-center items-center">
        <span className="loading loading-ring loading-lg text-red-800"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return (
    <Navigate
      to="/login"
      replace={true}
      state={{ from: location.pathname }}
    ></Navigate>
  );
};

export default PrivateRoute;
