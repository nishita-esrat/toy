import React from "react";
import { Link, useRouteError } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { MdError } from "react-icons/md";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="container flex flex-col justify-center items-center gap-5 h-lvh">
      <MdError className="w-28 h-28" />
      <h1>Oops!</h1>
      <p className="font-medium text-center">
        Sorry, an unexpected error has occurred.
      </p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link
        to="/"
        className="btn-common flex justify-center items-center gap-2"
      >
        Go To Home
        <AiFillHome />
      </Link>
    </div>
  );
};

export default ErrorPage;
