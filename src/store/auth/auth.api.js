// import AxiosClient from "../../services/API";
import { BASE_API_URL } from "../../constants";
import axios from "axios";
const AUTH_API = {
  signIn: async (dataInput) => {
    const res = await axios({
      method: "post",
      url: `${BASE_API_URL}login`,
      headers: {},
      data: {
        email: dataInput.data.email,
        password: dataInput.data.password,
      },
    });
    return res.data;
  },
  signUp: async (dataInput) => {
    const res = await axios({
      method: "post",
      url: `${BASE_API_URL}register`,
      headers: {},
      data: {
        email: dataInput.data.email,
        password: dataInput.data.password,
      },
    });
    return res.data;
  },
};
export default AUTH_API;
