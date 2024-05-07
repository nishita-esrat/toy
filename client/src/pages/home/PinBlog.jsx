import React from "react";
import BlogItem from "../../shared/BlogItem";

const PinBlog = ({ pinblog }) => {
  return (
    <div className="container mt-16 mb-11 flex flex-col gap-3 font-mono">
      <h3 className=" font-bold text-xl lg:text-4xl text-center mb-5 text-transparent  bg-clip-text bg-gradient-to-r from-red-300 via-red-600 to-red-900">
        your select pined blog
      </h3>
      {pinblog.map((blog) => {
        return (
          <BlogItem
            key={blog.id}
            question={blog.question}
            answer={blog.answer}
            isButton={false}
          />
        );
      })}
    </div>
  );
};

export default PinBlog;
