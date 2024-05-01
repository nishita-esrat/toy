import React, { useState } from "react";

const UpdateToy = () => {
  const [singleValue, setSingleValue] = useState({
    available_quantity: "",
    price: "",
    detail_description: "",
  });
  const getInputValue = (event) => {
    setSingleValue({ ...singleValue, [event.target.name]: event.target.value });
    console.log(singleValue);
  };
  // for update toy modal submit function
  const modalSubmit = (event) => {
    event.preventDefault();
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
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-red-800">description</span>
          </label>
          <input
            type="text"
            placeholder="description"
            name="detail_description"
            value={singleValue.detail_description}
            onChange={getInputValue}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn text-red-800">update</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateToy;
