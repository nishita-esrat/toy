import React from "react";
import Rating from "react-rating";

const ModalSingleToy = ({
  toy_pic,
  toy_name,
  seller_name,
  seller_email,
  rating,
  quantity,
  price,
  sub_category,
  details,
}) => {
  return (
    <div>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box p-1 md:p-3">
          <div className="card w-full bg-base-100  mx-auto">
            <figure>
              <img src={toy_pic} alt="toy pic" />
            </figure>
            <div className="card-body px-2 pt-8 pb-5 font-mono">
              <p className="text-slate-500">
                toy name :
                <span className="text-red-800 font-bold text-lg">
                  {toy_name}
                </span>
              </p>
              <p className="text-slate-500">
                seller name :
                <span className="text-slate-700">{seller_name}</span>
              </p>
              <p className="text-slate-500">
                seller email :
                <span className="text-slate-700">{seller_email}</span>
              </p>
              <p className="text-slate-500">
                subcategory :
                <span className="text-slate-700">{sub_category}</span>
              </p>
              <p className="text-slate-500">
                price :<span className="text-red-800">{price}$</span>
              </p>
              <p className="text-slate-500">
                qantity :<span className="text-slate-700">{quantity}</span>
              </p>
              <Rating
                stop={5}
                initialRating={rating}
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
              <p className="text-slate-700">{details}</p>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default ModalSingleToy;
