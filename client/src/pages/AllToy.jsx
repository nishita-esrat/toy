import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import singleToyLoader from "../utility/getSingleToy";
import ModalSingleToy from "../shared/ModalSingleToy";
import { authContext } from "../provider/AuthContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AllToy = () => {
  const { user } = useContext(authContext);
  const navigation = useNavigate();
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
  const [toys, setToys] = useState([]);
  const [toyName, setToyName] = useState("");
  const [singleToy, setSingleToy] = useState({});
  const [totalToys, setTotalToys] = useState(0);
  const [pageArray, setPageArray] = useState([]);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  // get toy name value function from input
  const toyNameFun = (event) => {
    setPage(1);
    setToyName(event.target.value);
  };
  // page function
  const pageFun = (page) => {
    setPage(page);
  };
  // creating page array function
  const countPageFun = (limit, totalToys) => {
    const pageNumber = Math.ceil(totalToys / limit);
    const arrayOfPageNumber = Array.from(
      { length: pageNumber },
      (_v, i) => i + 1
    );
    return arrayOfPageNumber;
  };
  // get selected value function
  const limitValueFun = (event) => {
    setPage(1);
    setLimit(event.target.value);
  };
  // view detail of single toy function
  const viewDetailsFun = async (id) => {
    if (user) {
      await singleToyLoader(id, setSingleToy);
    } else {
      Toast.fire({
        icon: "info",
        title: "you have to log in first to view details",
      });
      navigation("/login");
    }
  };
  // load toys data based on toy name ,limit ,page
  const loadAllToysData = async () => {
    try {
      const response = await axios.get(
        `/api/toys?limit=${limit}&page=${page}&toyName=${toyName}`
      );
      setToys(response.data.result);
      setTotalToys(response.data.totalCount);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  // call countPageFun function when limit and totalToys value change
  useEffect(() => {
    const pages = countPageFun(limit, totalToys);
    setPageArray(pages);
  }, [limit, totalToys]);
  // call loadAllToysData function when limit ,page and toyName value change
  useEffect(() => {
    loadAllToysData();
  }, [page, limit, toyName]);
  return (
    <div className="container mb-10 mt-14 ">
      {/* input section */}
      <label className="input input-bordered flex items-center gap-2 my-16">
        <input
          type="text"
          className="grow text-red-800"
          placeholder="Search by toy name"
          onChange={(event) => toyNameFun(event)}
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
      {/* table section */}
      <div className="overflow-y-auto ">
        <table className="table text-center mx-auto w-[1150px] font-mono min-h-[200px]">
          <thead className="text-red-800 text-sm">
            <tr>
              <th>id#</th>
              <th>seller name</th>
              <th>toy name</th>
              <th>Sub-category</th>
              <th>price</th>
              <th>Available Quantity</th>
              <th className="w-44"></th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td className="loading loading-ring loading-lg text-red-800 my-24"></td>
              </tr>
            ) : toys.length != 0 ? (
              toys.map((toy) => (
                <tr key={toy._id}>
                  <th className="text-red-800">
                    {toy._id.slice(-2, toy._id.length)}
                  </th>
                  <td>{toy.seller_name}</td>
                  <td>{toy.toy_name}</td>
                  <td>{toy.sub_category}</td>
                  <td className="text-red-800 font-medium">{toy.price}$</td>
                  <td>{toy.available_quantity}</td>
                  <td className="text-right">
                    <button
                      className="btn-common text-sm"
                      onClick={() => viewDetailsFun(toy._id)}
                    >
                      view details
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="text-black font-medium text-lg">
                  there is no matched data
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {/* pagination and limit section */}
      {pageArray.length != 0 && (
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 my-16">
          <div className="join ">
            {pageArray.map((pageItem) => (
              <button
                className={`join-item btn btn-sm text-red-800 ${
                  page == pageItem && " bg-red-800 text-white"
                }`}
                key={pageItem}
                onClick={() => pageFun(pageItem)}
              >
                {pageItem}
              </button>
            ))}
          </div>
          <select
            className="select select-bordered select-sm w-[100px] max-w-xs text-red-800"
            onChange={(event) => limitValueFun(event)}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
          </select>
        </div>
      )}
      {/* for modal component */}
      <ModalSingleToy
        toy_pic={singleToy?.pic_of_toy}
        toy_name={singleToy?.toy_name}
        seller_name={singleToy?.seller_name}
        seller_email={singleToy?.seller_email}
        rating={singleToy?.rating}
        quantity={singleToy?.available_quantity}
        price={singleToy?.price}
        sub_category={singleToy?.sub_category}
        details={singleToy?.detail_description}
      />
    </div>
  );
};

export default AllToy;
