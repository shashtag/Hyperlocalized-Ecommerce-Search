import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API;

export const post = async (url, data) => {
  try {
    return await axios
      .post(url, data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        console.log(res.data);
        return { result: res.data, status: res.status };
      });
  } catch (error) {
    console.log(error.response.data);
    return { result: error.response.data, status: error.response.status };
  }
};
