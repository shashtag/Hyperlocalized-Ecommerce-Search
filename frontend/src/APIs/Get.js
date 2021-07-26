import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API;

export const get = async (url) => {
  try {
    return await axios
      .get(url, {
        headers: { Authorization: `Bearer ${localStorage.getItem("Secret")}` },
      })
      .then((res) => {
        console.log(res);
        return { result: res.data, status: res.status };
      });
  } catch (error) {
    console.log(error.response.data);

    return { result: error.response.data, status: error.response.status };
  }
};
