import React, { useEffect, useState } from "react";
import axios from "axios";
import { getPinFromLocalStorage, setPinItem } from "../utility/pinItems";
import BlogItem from "../shared/BlogItem";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectPins, setSelectPins] = useState({});
  const [pinTrue, setPinTrue] = useState(true);
  // load blog function
  const loadBlog = async () => {
    const res = await axios.get("./blogs.json");
    setBlogs(res.data);
  };
  // set blog id to local storage function
  const pinFunction = (id) => {
    // set local storage function
    setPinItem(id);
    setPinTrue(!pinTrue);
  };
  // get blogs from local storage when pinTrue is changed
  useEffect(() => {
    const pinItem = getPinFromLocalStorage();
    setSelectPins(pinItem);
  }, [pinTrue]);
  // get blogs
  useEffect(() => {
    loadBlog();
  }, []);
  return (
    <div className="container my-10 flex flex-col gap-5">
      {blogs.length != 0 &&
        blogs.map((blog) => {
          return (
            <BlogItem
              key={blog.id}
              question={blog.question}
              answer={blog.answer}
              id={blog.id}
              pinFunction={pinFunction}
              selectPins={selectPins}
              isButton={true}
            />
          );
        })}
    </div>
  );
};

export default Blog;
