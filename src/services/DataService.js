import BaseService from "./BaseService";
import axios from "axios";

var CancelToken = axios.CancelToken;
var source = CancelToken.source();

class DataService extends BaseService {
  static async stopRequest() {
    source.cancel("Operation canceled by the user.");
  }

  static async resetRequest() {
    CancelToken = axios.CancelToken;
    source = CancelToken.source();
  }

  static async getProgramList() {
    var response = await this.axios.get("/launches?limit=100");
    console.log(response);
    return response.status === 200 ? response.data : [];
  }

  static async getLaunchList(launchFilter) {
    var response = await this.axios.get(
      `/launches?limit=100&launch_success=${launchFilter}`
    );
    return response.status === 200 ? response.data : [];
  }

  static async getAllList(launchFilter, landFilter, yearFilter) {
    var response = await this.axios.get(
      `/launches?limit=100&launch_success=${launchFilter}&land_success=${landFilter}&launch_year=${yearFilter}`
    );
    return response.status === 200 ? response.data : [];
  }

  static async getLandList(launchFilter, landFilter) {
    var response = await this.axios.get(
      `/launches?limit=100&launch_success=${launchFilter}&land_success=${landFilter}`
    );
    return response.status === 200 ? response.data : [];
  }
}

export default DataService;
