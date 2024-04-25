import React from "react";
import { Link } from "react-router-dom";

const AllToy = () => {
  return (
    <div className="container mb-10 mt-14 ">
      <label className="input input-bordered flex items-center gap-2 my-16">
        <input
          type="text"
          className="grow text-red-800"
          placeholder="Search by toy name"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70 text-red-800"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
      <div className="overflow-y-auto ">
        <table className="table text-center mx-auto w-[1150px]">
          <thead className="text-red-800 text-sm">
            <tr>
              <th></th>
              <th>seller name</th>
              <th>toy name</th>
              <th>Sub-category</th>
              <th>price</th>
              <th>Available Quantity</th>
              <th className="w-44"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="text-red-800">1</th>
              <td>Cy Gandertonffffffffffffffffffff</td>
              <td>Quality Control Specialisffffffffffffffft</td>
              <td>Littel, Schaden and Vandervortffffffffffffffffffff</td>
              <td className="text-red-800 font-medium">100$</td>
              <td>100</td>
              <td className="text-right">
                <Link className="btn-common text-sm">view details</Link>
              </td>
            </tr>
            <tr>
              <th className="text-red-800">1</th>
              <td>Cy Gandertonfffffffffffffffffffffffffffffffff</td>
              <td>Quality Control Specialisffffffffffffffft</td>
              <td>Littel, Schaden and Vandervortffffffffffffffffffff</td>
              <td className="text-red-800 font-medium">100$</td>
              <td>100</td>
              <td className="text-right">
                <Link className="btn-common text-sm ">view details</Link>
              </td>
            </tr>
            <tr>
              <th className="text-red-800">1</th>
              <td>Cy Gandertonfffffffffffffffffffffffffffffffff</td>
              <td>Quality Control Specialisffffffffffffffft</td>
              <td>Littel, Schaden and Vandervortffffffffffffffffffff</td>
              <td className="text-red-800 font-medium">100$</td>
              <td>100</td>
              <td className="text-right">
                <Link className="btn-common text-sm">view details</Link>
              </td>
            </tr>
            <tr>
              <th className="text-red-800">1</th>
              <td>Cy Gandertonfffffffffffffffffffffffffffffffff</td>
              <td>Quality Control Specialisffffffffffffffft</td>
              <td>Littel, Schaden and Vandervortffffffffffffffffffff</td>
              <td className="text-red-800 font-medium">100$</td>
              <td>100</td>
              <td className="text-right">
                <Link className="btn-common text-sm">view details</Link>
              </td>
            </tr>
            <tr>
              <th className="text-red-800">1</th>
              <td>Cy Gandertonfffffffffffffffffffffffffffffffff</td>
              <td>Quality Control Specialisffffffffffffffft</td>
              <td>Littel, Schaden and Vandervortffffffffffffffffffff</td>
              <td className="text-red-800 font-medium">100$</td>
              <td>100</td>
              <td className="text-right">
                <Link className="btn-common text-sm">view details</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 my-16">
        <div className="join ">
          <button className="join-item btn btn-sm text-red-800">1</button>
          <button className="join-item btn btn-sm btn-active text-red-800">
            2
          </button>
          <button className="join-item btn btn-sm text-red-800">3</button>
          <button className="join-item btn btn-sm text-red-800">4</button>
        </div>
        <select className="select select-bordered select-sm w-[100px] max-w-xs">
          <option disabled selected>
            limit 
          </option>
          <option>5</option>
          <option>10</option>
        </select>
      </div>
    </div>
  );
};

export default AllToy;
