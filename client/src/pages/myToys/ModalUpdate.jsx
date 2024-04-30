import React from "react";

const ModalUpdate = ({ modalSubmit }) => {
  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg text-red-800">update</h3>
        {/* form section for update modal */}
        <form
          className="card-body text-red-800 p-0 py-5"
          onSubmit={modalSubmit}
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text text-red-800">price</span>
            </label>
            <input
              type="number"
              placeholder="price"
              name="price"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-red-800">
                available quantity
              </span>
            </label>
            <input
              type="number"
              name="available quantity"
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
              name="description"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn text-red-800">update</button>
          </div>
        </form>
      </div>
      {/* close button */}
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default ModalUpdate;
