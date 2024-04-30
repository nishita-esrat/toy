import React, { useState } from "react";
import ModalUpdate from "./ModalUpdate";
import Swal from "sweetalert2";

const MyToys = () => {
  const [loading, setLoading] = useState(false);
  const [myToys, setMyToys] = useState("oo");
  // for deleting toy function
  const deleteById = (id) => {
    console.log(id);
  };
  // for deleting toy confirm swal
  const handelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#7f8fa6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        deleteById(id);
      }
    });
  };
  // for update toy modal submit function
  const modalSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
  };
  return (
    <div className="container my-14 min-h-screen font-mono">
      <h2 className="text-xl font-mono font-semibold">
        sort by price<span className="text-red-800 ms-3">:</span>
      </h2>
      <div className="w-fit flex gap-3 text-sm mt-10 mb-14">
        <div className="btn btn-outline bg-slate-800 text-white">ascending</div>
        <div className="btn btn-outline ">descending</div>
      </div>
      {/* for loading is true */}
      {loading && (
        <div className="flex justify-center items-center h-[300px]">
          <span className="loading loading-ring loading-lg text-red-800 text-center"></span>
        </div>
      )}
      {/* my toys is available then show */}
      {myToys.length != 0 && (
        <div className="overflow-x-auto">
          <table className="table w-[1150px]">
            {/* head */}
            <thead className="text-black text-sm">
              <tr>
                <th>Toy Name</th>
                <th>Detail description</th>
                <th>price</th>
                <th> available quantity</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row  */}
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="https://images.unsplash.com/photo-1546776230-bb86256870ce?q=80&w=2010&…"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-red-800">
                        DinoBot Explorer
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and LeannonZemlak, Daniel and Leannon Zemlak,
                  Daniel and Leannon Zemlak, Daniel and Leannon Zemlak, Daniel
                  and Leannon Leannon Zemlak, Daniel and Leannon Leannon Zemlak,
                  Daniel and Leannon{" "}
                </td>
                <td>45$</td>
                <td>200</td>
                <th className="text-end">
                  <button
                    className="btn-common text-sm"
                    onClick={() =>
                      document.getElementById("my_modal_2").showModal()
                    }
                  >
                    update
                  </button>
                </th>
                <th className="text-end">
                  <button
                    className="bg-gray-300 sm:py-2 py-1 sm:px-5 px-3 rounded-md text-sm"
                    htmlFor="my_modal_6"
                    onClick={() => handelDelete("01")}
                  >
                    delete
                  </button>
                </th>
              </tr>
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="https://images.unsplash.com/photo-1546776230-bb86256870ce?q=80&w=2010&…"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-red-800">
                        DinoBot Explorer
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and LeannonZemlak, Daniel and Leannon Zemlak,
                  Daniel and Leannon Zemlak, Daniel and Leannon Zemlak, Daniel
                  and Leannon Leannon Zemlak, Daniel and Leannon Leannon Zemlak,
                  Daniel and Leannon{" "}
                </td>
                <td>45$</td>
                <td>200</td>
                <th className="text-end">
                  <button className="btn-common text-sm">update</button>
                </th>
                <th className="text-end">
                  <button className="bg-gray-300 sm:py-2 py-1 sm:px-5 px-3 rounded-md text-sm">
                    delete
                  </button>
                </th>
              </tr>
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="https://images.unsplash.com/photo-1546776230-bb86256870ce?q=80&w=2010&…"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-red-800">
                        DinoBot Explorer
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and LeannonZemlak, Daniel and Leannon Zemlak,
                  Daniel and Leannon Zemlak, Daniel and Leannon Zemlak, Daniel
                  and Leannon Leannon Zemlak, Daniel and Leannon Leannon Zemlak,
                  Daniel and Leannon
                </td>
                <td>45$</td>
                <td>200</td>
                <th className="text-end">
                  <button className="btn-common text-sm">update</button>
                </th>
                <th className="text-end">
                  <button className="bg-gray-300 sm:py-2 py-1 sm:px-5 px-3 rounded-md text-sm">
                    delete
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      {/* my toys is not available then show */}
      {myToys.length == 0 && (
        <div className="flex justify-center items-center h-[300px] text-xl md:text-4xl">
          there is no toy
        </div>
      )}
      {/* modal section for updating */}
      <ModalUpdate modalSubmit={modalSubmit} />
    </div>
  );
};

export default MyToys;
