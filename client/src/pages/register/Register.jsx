import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container max-w-[550px] text-red-800 font-mono my-10">
      <form className="card-body p-0 pb-10">
        <h4 className="mb-5 text-xl font-bold">sign up</h4>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-red-800">Name</span>
          </label>
          <input
            type="text"
            placeholder="enter your name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-red-800">Photo URL</span>
          </label>
          <input
            type="text"
            placeholder="enter your photo URL"
            className="input input-bordered"
            required
          />
        </div>
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
            Already have an account
            <Link
              to="/login"
              className="label-text-alt link link-hover text-sm"
            >
              sign in?
            </Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-common">sign up</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
