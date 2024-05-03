import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { authContext } from "../../provider/AuthContext";

const Register = () => {
  const { createUser, nameAndPhoto } = useContext(authContext);
  const initialValue = {
    name: "",
    photo: "",
    email: "",
    password: "",
  };
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  const [newUser, setNewUser] = useState(initialValue);
  // to get input value function
  const getInputValue = (event) => {
    setNewUser({ ...newUser, [event.target.name]: event.target.value });
  };
  // create new user function
  const registerHandler = async (event) => {
    event.preventDefault();
    // password is less than 6
    if (newUser.password.length < 6) {
      // error message
      Toast.fire({
        icon: "error",
        title: "password must be greater than 6",
      });
      return;
    }
    try {
      await createUser(newUser.email, newUser.password);
      // Signed up
      // Profile updated!
      await nameAndPhoto(newUser.name, newUser.photo);
      // success message
      Toast.fire({
        icon: "success",
        title: "sign up successfully",
      });
    } catch (error) {
      // error message
      Toast.fire({
        icon: "error",
        title: "user already exist",
      });
    }
  };
  return (
    <div className="container max-w-[550px] text-red-800 font-mono my-10">
      <form className="card-body p-0 pb-10" onSubmit={registerHandler}>
        <h4 className="mb-5 text-xl font-bold">sign up</h4>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-red-800">Name</span>
          </label>
          <input
            type="text"
            placeholder="enter your name"
            name="name"
            value={newUser.name}
            onChange={getInputValue}
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
            name="photo"
            value={newUser.photo}
            onChange={getInputValue}
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
            name="email"
            value={newUser.email}
            onChange={getInputValue}
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
            name="password"
            value={newUser.password}
            onChange={getInputValue}
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
