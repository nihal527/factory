/*eslint-disable */
import Api from "@/services/Api";

export default {
  register(credentials) {
    console.log("user  : ", credentials);
    return Api().post("register", credentials);
  },
  login(credentials) {
    return Api().post("login", credentials);
  }
};
