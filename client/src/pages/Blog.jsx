import React, { useContext, useEffect, useState } from "react";
import { TiPin } from "react-icons/ti";
import axios from "axios";
import { authContext } from "../provider/AuthContext";

const Blog = () => {
  const { user, loading } = useContext(authContext);
  const [blogs, setBlogs] = useState([]);
  const loadBlog = async () => {
    const res = await axios.get("./blogs.json");
    setBlogs(res.data);
  };
  useEffect(() => {
    loadBlog();
  }, []);
  return (
    <div className="container my-10 flex flex-col gap-5">
      {blogs.length != 0 &&
        blogs.map((blog) => {
          return (
            <div
              role="alert"
              className="alert shadow-sm bg-white border border-b-[1px] border-b-gray-300"
              key={blog.id}
            >
              <div>
                <h3 className="font-bold text-slate-700">{blog.question}</h3>
                <div className="text-xs mt-3">{blog.answer}</div>
              </div>
              <button
                className="btn btn-md mx-auto md:me-1 text-gray-500"
                disabled={loading || !user ? true : false}
              >
                <TiPin size={25} />
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default Blog;
