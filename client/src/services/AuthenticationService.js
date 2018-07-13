/*eslint-disable */
import Api from "@/services/Api";

export default {
  register(credentials) {
    console.log("post");
    return Api().post("register", credentials);
  }
};
