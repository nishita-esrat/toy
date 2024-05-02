import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="container navbar bg-base-100 mt-0 xl:mt-10 shadow-md">
      {/* navber start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="mr-4 text-red-800 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-sm text-red-800 font-medium font-mono mb-5"
                    : "text-gray-600 text-sm font-medium font-mono mb-5"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/allToy"
                className={({ isActive }) =>
                  isActive
                    ? "text-sm text-red-800 font-medium font-mono mb-5"
                    : "text-gray-600 text-sm font-medium font-mono mb-5"
                }
              >
                All Toys
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/allToy"
                className={({ isActive }) =>
                  isActive
                    ? "text-sm text-red-800 font-medium font-mono mb-5"
                    : "text-gray-600 text-sm font-medium font-mono mb-5"
                }
              >
                All Toys
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/myToy"
                className={({ isActive }) =>
                  isActive
                    ? "text-sm text-red-800 font-medium font-mono mb-5"
                    : "text-gray-600 text-sm font-medium font-mono mb-5"
                }
              >
                My Toys
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/addToy"
                className={({ isActive }) =>
                  isActive
                    ? "text-sm text-red-800 font-medium font-mono mb-5"
                    : "text-gray-600 text-sm font-medium font-mono mb-5"
                }
              >
                Add a Toy
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  isActive
                    ? "text-sm text-red-800 font-medium font-mono mb-5"
                    : "text-gray-600 text-sm font-medium font-mono mb-5"
                }
              >
                Blogs
              </NavLink>
            </li>
          </ul>
        </div>
        <Link className="text-xl flex items-center font-bold ms-0 lg:ms-3">
          Ty<span className="text-red-800 font-mono">Ro</span>bot
          <img src="/logo.png" alt="logo" className="w-14" />
        </Link>
      </div>
      {/* navber center */}
      <div className="navbar-center hidden lg:flex">
        <ul className=" menu-horizontal gap-7 px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-lg text-red-800 font-medium font-mono"
                  : "text-gray-600 text-lg font-medium font-mono"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/allToy"
              className={({ isActive }) =>
                isActive
                  ? "text-lg text-red-800 font-medium font-mono"
                  : "text-gray-600 text-lg font-medium font-mono"
              }
            >
              All Toys
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myToy"
              className={({ isActive }) =>
                isActive
                  ? "text-lg text-red-800 font-medium font-mono"
                  : "text-gray-600 text-lg font-medium font-mono"
              }
            >
              My Toys
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addToy"
              className={({ isActive }) =>
                isActive
                  ? "text-lg text-red-800 font-medium font-mono"
                  : "text-gray-600 text-lg font-medium font-mono"
              }
            >
              Add a Toy
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive
                  ? "text-lg text-red-800 font-medium font-mono"
                  : "text-gray-600 text-lg font-medium font-mono"
              }
            >
              Blogs
            </NavLink>
          </li>
        </ul>
      </div>
      {/* navber end */}
      <div className="navbar-end">
        {/* navber user image */}
        {/* <div className="dropdown dropdown-end ">
          <div tabIndex={0} role="button" className="btn btn-circle avatar">
            <div className="w-14 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                title="somthing"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu-sm dropdown-content mt-4 z-[1] p-2 shadow bg-base-100  w-24 bg-red-800 rounded-md"
          >
            <li className="text-white font-semibold text-center">Logout</li>
          </ul>
        </div> */}
        {/* navber login */}
        <Link to='/login' className="mr-0 lg:mr-2 btn-common">Login</Link>
      </div>
    </div>
  );
};

export default Header;
