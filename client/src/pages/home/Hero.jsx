import React from "react";

const Hero = () => {
  return (
    <div className="container flex flex-col xl:flex-row flex-col-reverse gap-11 xl:gap-0 pt-20  xl:pt-5 items-center justify-between ">
      <img
        src="./hero.png"
        alt="hero image"
        className="w-full xl:w-1/2 h-[500px] object-cover object-top"
      />
      <div className="text-red-800 font-extrabold">
        <span className="text-6xl md:-ms-36">Sale</span>
        <h2 className="text-xl md:-ms-10 my-4">limited</h2>
        <h2 className=" text-5xl md:text-7xl font-mono">time only</h2>
      </div>
    </div>
  );
};

export default Hero;
