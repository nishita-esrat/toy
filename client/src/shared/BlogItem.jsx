import React, { useContext } from "react";
import { authContext } from "../provider/AuthContext";
import { TiPin } from "react-icons/ti";

const BlogItem = ({
  question,
  answer,
  id,
  pinFunction,
  selectPins,
  isButton,
}) => {
  const { user, loading } = useContext(authContext);
  return (
    <div
      role="alert"
      className="alert shadow-sm bg-white border border-b-[1px] border-b-gray-300"
    >
      <div>
        <h3 className="font-bold text-slate-700">{question}</h3>
        <div className="text-sm mt-3">{answer}</div>
      </div>
      {isButton && (
        <button
          className={`btn btn-md mx-auto md:me-0 ${
            selectPins[id] == "select pin" ? "text-red-800" : "text-gray-500"
          }`}
          disabled={loading || !user ? true : false}
          onClick={() => pinFunction(id)}
        >
          <TiPin size={25} />
        </button>
      )}
    </div>
  );
};

export default BlogItem;
