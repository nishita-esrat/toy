import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateToy = () => {
  // get single toy data
  const response = useLoaderData();
  // to navigate my toy page
  const navigate = useNavigate();
  // set single toy data
  const [singleValue, setSingleValue] = useState({
    available_quantity: response.available_quantity,
    price: response.price,
    detail_description: response.detail_description,
  });
  // to get toy data when input is changed
  const getInputValue = (event) => {
    setSingleValue({ ...singleValue, [event.target.name]: event.target.value });
  };
  // for update toy submit function
  const modalSubmit = async (event) => {
    event.preventDefault();
    // to convert price string to number type
    singleValue.price = parseInt(singleValue.price);
    if (
      response.available_quantity == singleValue.available_quantity &&
      response.price == singleValue.price &&
      response.detail_description == singleValue.detail_description
    ) {
      return;
    } else {
      await axios.patch(`/api/update/${response._id}`, singleValue);
      navigate("/myToy");
    }
  };
  return (
    <div>
      <form
        className="card-body text-red-800 pt-16 container max-w-[700px] font-mono"
        onSubmit={modalSubmit}
      >
        <h2 className="mb-5 font-semibold text-lg">update toy's info</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-red-800">price</span>
          </label>
          <input
            type="number"
            placeholder="price"
            name="price"
            value={singleValue.price}
            onChange={getInputValue}
            required
            min={0}
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
            value={singleValue.available_quantity}
            onChange={getInputValue}
            placeholder="available quantity"
            className="input input-bordered"
            required
            min={0}
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
            value={singleValue.detail_description}
            onChange={getInputValue}
            required
          ></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn text-red-800">update</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateToy;
