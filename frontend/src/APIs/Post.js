import axios from "axios";

axios.defaults.baseURL = "http://752a47584bfb.ngrok.io/";

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
export const postForm = async (url, data) => {
  try {
    return await axios
      .post(url + "upload", data, {
        headers: { "content-type": "multipart/form-data" },
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
export const postWithToken = async (url, data) => {
  try {
    return await axios
      .post(url, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("Secret")}`,
        },
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
