import axios from "axios";
import { loadProgressBar } from "../axios-progress-bar";
import { toast } from "react-toastify";
import DataService from "./DataService";

let axiosInstance = axios.create({
  baseURL: "https://api.spaceXdata.com/v3",
});

axiosInstance.defaults.headers.common["Accept"] = "application/json";

axiosInstance.interceptors.response.use(
  (response) => {
    if (
      response.data.status &&
      response.data.status !== 200 &&
      response.data.status !== 204 &&
      response.data.status !== 206
    ) {
      toast.error(response.data.message, {
        position: toast.POSITION.BOTTOM_LEFT,
        autoClose: false,
      });
    }
    return response;
  },
  async (error) => {
    // Do something with error data
    console.log(error);
    // normal error cases
    if (error.message && error.message === "Operation canceled by the user.") {
      //currently canceltoken is used only in managment service,used to refresh cancel tokens all service layers with cancel token should be added here
      DataService.resetRequest();
      console.log(error.message);
    } else if (error.response && error.response.status === "500") {
      toast.error(error.response.data.message, {
        position: toast.POSITION.BOTTOM_LEFT,
        autoClose: false,
      });
    } else if (error.response && error.response.message) {
      toast.error(error.response.message, {
        position: toast.POSITION.BOTTOM_LEFT,
        autoClose: false,
      });
    } else if (error.message) {
      toast.error(error.message, {
        position: toast.POSITION.BOTTOM_LEFT,
        autoClose: false,
      });
    } else {
      toast.error("Something went wrong", {
        position: toast.POSITION.BOTTOM_LEFT,
        autoClose: false,
      });
    }

    if (error.response) {
      return error.response;
    } else {
      return Promise.reject(error);
    }
  }
);

class BaseService {
  static get axios() {
    loadProgressBar(axiosInstance);
    return axiosInstance;
  }
}

export default BaseService;
