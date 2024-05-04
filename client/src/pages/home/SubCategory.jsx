import React, { useState, useContext } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Rating from "react-rating";
import "react-tabs/style/react-tabs.css";
import axios from "axios";
import { useEffect } from "react";
import singleToyLoader from "../../utility/getSingleToy";
import ModalSingleToy from "../../shared/ModalSingleToy";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { authContext } from "../../provider/AuthContext";

const SubCategory = () => {
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
  const [subCategorys, setSubCategorys] = useState([]);
  const [singleToy, setSingleToy] = useState({});
  const [tab, setTab] = useState("Educational Robots");
  const [totalData, setTotalData] = useState(0);
  const [page, setPage] = useState(1);
  const tabArray = [
    "Educational Robots",
    "Interactive Robots",
    "Coding Robots",
  ];
  // calculate total number of page
  const totalNumberOfPage = (totalData) => {
    const totalPage = Math.ceil(totalData / 3);
    return totalPage;
  };
  // calling total number of page funtion
  const numberOfPage = totalNumberOfPage(totalData);
  // getting tab value and set page == 1
  const tabFun = (tab) => {
    setPage(1);
    setTab(tab);
  };
  // incerment or decerment function for pagination
  const pageNumber = (inOrDe) => {
    if (inOrDe == "incerment") {
      setPage((prevCounter) => prevCounter + 1);
    }
    if (inOrDe == "decerment") {
      setPage((prevCounter) => prevCounter - 1);
    }
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
  // fatch data
  const loadDataBasedOnSubCategory = async () => {
    try {
      const response = await axios.get(
        `/api/toys?subCategory=${tab}&limit=3&page=${page}`
      );
      setSubCategorys(response.data.result);
      setTotalData(response.data.totalCount);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    loadDataBasedOnSubCategory();
  }, [page, tab]);
  return (
    <div className="container mt-16 mb-6 pb-20 relative">
      <h2 className="text-center mt-5 mb-8 md:mb-12 text-red-800 font-mono font-semibold text-2xl md:text-3xl">
        Shop by category
      </h2>
      <Tabs selectedTabClassName="text-red-800">
        {/* for tab lists part */}
        <TabList className="border-b-2 border-red-600 font-mono font-semibold">
          {tabArray.map((tab) => (
            <Tab key={tab} onClick={() => tabFun(tab)}>
              {tab}
            </Tab>
          ))}
        </TabList>
        {/* tabpanel */}
        {tabArray.map((tab) => (
          <TabPanel className="mt-5" key={tab}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 font-mono">
              {subCategorys.length != 0 ? (
                subCategorys.map((subcategory) => (
                  <div
                    className="card bg-base-100 shadow-md"
                    key={subcategory._id}
                  >
                    <figure className="px-3 pt-5">
                      <img
                        src={subcategory.pic_of_toy}
                        alt="Shoes"
                        className="rounded-xl h-52 w-full object-fill"
                      />
                    </figure>
                    <div className="card-body items-start px-5">
                      <h2 className="card-title text-gray-500 text-base">
                        name:
                        <span className="text-red-800 text-lg">
                          {subcategory.toy_name}
                        </span>
                      </h2>
                      <p className=" text-gray-500 text-base">
                        price:
                        <span className="text-red-800">
                          {subcategory.price}$
                        </span>
                      </p>
                      <Rating
                        stop={5}
                        initialRating={subcategory.rating}
                        readonly
                        emptySymbol={
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 text-red-800"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                            />
                          </svg>
                        }
                        fullSymbol={
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6 text-red-800"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        }
                      />

                      <button
                        className="btn-common mt-2"
                        onClick={() => viewDetailsFun(subcategory._id)}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <span className="loading loading-ring loading-lg text-red-800 text-center"></span>
              )}
            </div>
          </TabPanel>
        ))}
      </Tabs>
      {/* for pagination */}
      {subCategorys.length != 0 && (
        <div className="join absolute left-1/2 -translate-x-1/2 bottom-0">
          <button
            className="join-item btn text-red-800"
            disabled={page == 1 ? true : false}
            onClick={() => pageNumber("decerment")}
          >
            «
          </button>
          <button className="join-item btn text-red-800">Page {page}</button>
          <button
            className="join-item btn text-red-800"
            disabled={page == numberOfPage ? true : false}
            onClick={() => pageNumber("incerment")}
          >
            »
          </button>
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

export default SubCategory;
