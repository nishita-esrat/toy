import React from "react";
import { Link } from "react-router-dom";
import { FaGooglePlusG } from "react-icons/fa";

const Login = () => {
  return (
    <div className="container max-w-[550px] text-red-800 font-mono my-10">
      <form className="card-body p-0">
        <h4 className="mb-5 text-xl font-bold">sign in</h4>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-red-800">Email</span>
          </label>
          <input
            type="email"
            placeholder="enter your email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-red-800">Password</span>
          </label>
          <input
            type="password"
            placeholder="enter your password"
            className="input input-bordered"
            required
          />
          <label className="label text-red-800 mt-4 text-sm justify-start gap-2">
            Don't have an account
            <Link
              to="/register"
              className="label-text-alt link link-hover text-sm"
            >
              sign up?
            </Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-common">sign in</button>
        </div>
        <div className="divider mt-8">or</div>
      </form>
      <div className="flex justify-center items-center mb-2 mx-8">
        <button className="btn-common flex justify-center items-center gap-1">
          Google <FaGooglePlusG />
        </button>
      </div>
    </div>
  );
};

export default Login;
