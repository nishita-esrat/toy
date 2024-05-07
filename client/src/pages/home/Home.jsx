import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import SubCategory from "./SubCategory";
import PinBlog from "./PinBlog";
import { getPinItem } from "../../utility/pinItems";

const Home = () => {
  const [pins, setPins] = useState([]);
  // get pined blogs from local storage
  const loadPinFromLocalStorage = async () => {
    const pin = await getPinItem();
    setPins(pin);
  };
  // load pined function
  useEffect(() => {
    loadPinFromLocalStorage();
  }, []);
  return (
    <div>
      <Hero />
      {pins.length != 0 && <PinBlog pinblog={pins} />}
      <SubCategory />
    </div>
  );
};

export default Home;
