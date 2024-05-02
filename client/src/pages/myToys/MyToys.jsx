import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { Link } from "react-router-dom";

const MyToys = () => {
  const [loading, setLoading] = useState(true);
  const [myToys, setMyToys] = useState([]);
  const [sortPrice, setSortPrice] = useState("");

  // sot by price function
  const sortByPrice = (order) => {
    if (order == "ascending") {
      setSortPrice(order);
    }
    if (order == "descending") {
      setSortPrice(order);
    }
  };
  // for deleting toy function
  const deleteById = async (id) => {
    setLoading(true);
    await axios.delete(`/api/delete/${id}`);
    setLoading(false);
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
          text: "Your toy has been deleted.",
          icon: "success",
        });
        deleteById(id);
      }
    });
  };
  // load my toys data
  const loadMyToys = async () => {
    try {
      const response = await axios.get(
        `/api/toys?sellerEmail=choity@gmail.com&orderAscOrDes=${sortPrice}`
      );
      console.log(response.data);
      setMyToys(response.data.result);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    loadMyToys();
  }, [sortPrice, loading]);
  return (
    <div className="container my-14 min-h-screen font-mono">
      <h2 className="text-xl font-mono font-semibold">
        sort by price<span className="text-red-800 ms-3">:</span>
      </h2>
      <div className="w-fit flex gap-3 text-sm mt-10 mb-14">
        <div
          className={`btn btn-outline ${
            sortPrice == "ascending" && "bg-slate-800 text-white"
          } `}
          onClick={() => sortByPrice("ascending")}
        >
          ascending
        </div>
        <div
          className={`btn btn-outline ${
            sortPrice == "descending" && "bg-slate-800 text-white"
          } `}
          onClick={() => sortByPrice("descending")}
        >
          descending
        </div>
      </div>
      {/* for loading is true then show loading otherwise show my toys if my toys is empty then show there is no toy*/}
      {loading ? (
        <div className="flex justify-center items-center h-[300px]">
          <span className="loading loading-ring loading-lg text-red-800 text-center"></span>
        </div>
      ) : myToys.length != 0 ? (
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
              {myToys.map((toy) => (
                <tr key={toy._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={toy.pic_of_toy}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-red-800">
                          {toy.toy_name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{toy.detail_description}</td>
                  <td className="text-center">{toy.price}$</td>
                  <td className="text-center">{toy.available_quantity}</td>
                  <th className="text-end">
                    <Link
                      to={`/update_toy/${toy._id}`}
                      className="btn-common text-sm"
                    >
                      update
                    </Link>
                  </th>
                  <th className="text-end">
                    <button
                      className="bg-gray-300 sm:py-2 py-1 sm:px-5 px-3 rounded-md text-sm"
                      htmlFor="my_modal_6"
                      onClick={() => handelDelete(toy._id)}
                    >
                      delete
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex justify-center items-center h-[300px] text-xl md:text-4xl">
          there is no toy
        </div>
      )}
    </div>
  );
};

export default MyToys;
