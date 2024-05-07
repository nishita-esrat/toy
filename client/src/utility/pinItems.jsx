import axios from "axios";
// get pined blog from local storage function
export const getPinFromLocalStorage = () => {
  let pin = {};
  const isPin = localStorage.getItem("pins");
  if (isPin) {
    pin = JSON.parse(isPin);
  }
  return pin;
};

// get array of object of blogs ,storged in localStorage
export const getPinItem = async () => {
  const blogs = await axios.get("./blogs.json");
  const pin = getPinFromLocalStorage();
  const selectPinBlog = [];
  for (const id in pin) {
    blogs.data.find((blog) => {
      if (blog.id == id) {
        selectPinBlog.push(blog);
      }
    });
  }
  return selectPinBlog;
};
// set blog to local storage
export const setPinItem = (id) => {
  let pin = getPinFromLocalStorage();
  if (pin[id]) {
    delete pin[id];
  } else {
    pin[id] = "select pin";
  }
  localStorage.setItem("pins", JSON.stringify(pin));
};
