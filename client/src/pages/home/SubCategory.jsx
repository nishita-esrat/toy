import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import "react-tabs/style/react-tabs.css";

const SubCategory = () => {
  const tabArray = [
    "Educational Robots",
    "Interactive Robots",
    "Coding Robots",
  ];
  return (
    <div className="container mt-16 mb-6 pb-20 relative">
      <h2 className="text-center mt-5 mb-8 md:mb-12 text-red-800 font-mono font-semibold text-2xl md:text-3xl">
        Shop by category
      </h2>
      <Tabs selectedTabClassName="text-red-800">
        <TabList className="border-b-2 border-red-600 font-mono font-semibold">
          {tabArray.map((tab) => (
            <Tab>{tab}</Tab>
          ))}
        </TabList>
        {tabArray.map((tab) => (
          <TabPanel className="mt-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 font-mono">
              <div className="card  bg-base-100 shadow-md">
                <figure className="px-3 pt-5">
                  <img
                    src="https://images.unsplash.com/photo-1546776230-bb86256870ce?q=80&w=2010&…"
                    alt="Shoes"
                    className="rounded-xl h-52 w-full object-fill"
                  />
                </figure>
                <div className="card-body items-start px-5">
                  <h2 className="card-title text-gray-500 text-base">
                    name:<span className="text-red-800 text-lg">RoboRacer</span>
                  </h2>
                  <p className=" text-gray-500 text-base">
                    price:<span className="text-red-800">110$</span>
                  </p>
                  <Rating
                    stop={5}
                    initialRating={2.5}
                    readonly
                    emptySymbol={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6 text-red-800"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                        />
                      </svg>
                    }
                    fullSymbol={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-6 h-6 text-red-800"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    }
                  />

                  <Link className="btn-common mt-2">View Details</Link>
                </div>
              </div>
              <div className="card  bg-base-100 shadow-md">
                <figure className="px-3 pt-5">
                  <img
                    src="https://images.unsplash.com/photo-1643281587416-f321cce11c94?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Shoes"
                    className="rounded-xl h-52 w-full object-fill"
                  />
                </figure>
                <div className="card-body items-start px-5">
                  <h2 className="card-title text-gray-500 text-base">
                    name:<span className="text-red-800 text-lg">RoboRacer</span>
                  </h2>
                  <p className=" text-gray-500 text-base">
                    price:<span className="text-red-800">110$</span>
                  </p>
                  <Rating
                    stop={5}
                    initialRating={2.4}
                    readonly
                    emptySymbol={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6 text-red-800"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                        />
                      </svg>
                    }
                    fullSymbol={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-6 h-6 text-red-800"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    }
                  />

                  <Link className="btn-common mt-2">View Details</Link>
                </div>
              </div>
              <div className="card  bg-base-100 shadow-md">
                <figure className="px-3 pt-5">
                  <img
                    src="https://images.unsplash.com/photo-1546776230-bb86256870ce?q=80&w=2010&…"
                    alt="Shoes"
                    className="rounded-xl h-52 w-full object-fill"
                  />
                </figure>
                <div className="card-body items-start px-5">
                  <h2 className="card-title text-gray-500 text-base">
                    name:<span className="text-red-800 text-lg">RoboRacer</span>
                  </h2>
                  <p className=" text-gray-500 text-base">
                    price:<span className="text-red-800">110$</span>
                  </p>
                  <Rating
                    stop={5}
                    initialRating={2.5}
                    readonly
                    emptySymbol={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6 text-red-800"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                        />
                      </svg>
                    }
                    fullSymbol={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-6 h-6 text-red-800"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    }
                  />

                  <Link className="btn-common mt-2">View Details</Link>
                </div>
              </div>
            </div>
          </TabPanel>
        ))}
      </Tabs>
      <div className="join absolute left-1/2 -translate-x-1/2 bottom-0">
        <button className="join-item btn text-red-800">«</button>
        <button className="join-item btn text-red-800">Page 22</button>
        <button className="join-item btn text-red-800">»</button>
      </div>
      
    </div>
  );
};

export default SubCategory;
