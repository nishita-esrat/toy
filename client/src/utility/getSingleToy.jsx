import axios from "axios";

const singleToyLoader = async (id, setSingleToy) => {
  const response = await axios.get(`/api/singleToy/${id}`);
  setSingleToy(response.data);
  document.getElementById("my_modal_2").showModal();
};
export default singleToyLoader;
