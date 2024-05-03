import React, { useContext, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { authContext } from "../provider/AuthContext";

const AddToy = () => {
  const { user } = useContext(authContext);
  // set initial value
  const initialValue = {
    toy_name: "",
    pic_of_toy: "",
    sub_category: "",
    rating: "",
    price: "",
    available_quantity: "",
    detail_description: "",
  };
  const [toyValue, setToyValue] = useState(initialValue);
  //   get input value when input is changed
  const getToyValueInfoFromInput = (event) => {
    setToyValue({ ...toyValue, [event.target.name]: event.target.value });
  };
  //   submit function for add toy
  const addToySubmit = async (event) => {
    event.preventDefault();
    toyValue.price = parseInt(toyValue.price);
    toyValue.seller_email = user.email;
    toyValue.seller_name = user.displayName || "";
    if (toyValue.sub_category == "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "enter sub category",
      });
    }
    const res = await axios.post("/api/addToy", toyValue);
    if (res.data.insertedId) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your new toy is added",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div>
      <form
        className="card-body text-red-800 pt-16 container max-w-[700px] font-mono"
        onSubmit={addToySubmit}
      >
        <h2 className="mb-5 font-semibold text-lg">Add new toy</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-red-800">toy name</span>
          </label>
          <input
            type="text"
            placeholder="toy name"
            name="toy_name"
            value={toyValue.toy_name}
            onChange={getToyValueInfoFromInput}
            required
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-red-800">picture of toy</span>
          </label>
          <input
            type="text"
            placeholder="URL"
            name="pic_of_toy"
            value={toyValue.pic_of_toy}
            onChange={getToyValueInfoFromInput}
            required
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-red-800">subcategory</span>
          </label>
          <select
            className="select select-bordered w-full"
            name="sub_category"
            onChange={getToyValueInfoFromInput}
          >
            <option disabled selected>
              select sub category
            </option>
            <option>Educational Robots</option>
            <option>Interactive Robots</option>
            <option>Coding Robots</option>
          </select>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-red-800">rating</span>
          </label>
          <input
            type="number"
            placeholder="rating"
            name="rating"
            value={toyValue.rating}
            onChange={getToyValueInfoFromInput}
            required
            min={0}
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-red-800">price</span>
          </label>
          <input
            type="number"
            placeholder="price"
            name="price"
            value={toyValue.price}
            onChange={getToyValueInfoFromInput}
            required
            min={1}
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-red-800">available quantity</span>
          </label>
          <input
            type="number"
            name="available_quantity"
            value={toyValue.available_quantity}
            onChange={getToyValueInfoFromInput}
            placeholder="available quantity"
            className="input input-bordered"
            required
            min={1}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-red-800">description</span>
          </label>
          <textarea
            rows={5}
            className="textarea textarea-bordered"
            placeholder="description...."
            name="detail_description"
            value={toyValue.detail_description}
            onChange={getToyValueInfoFromInput}
            required
          ></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn text-red-800">add toy</button>
        </div>
      </form>
    </div>
  );
};

export default AddToy;
