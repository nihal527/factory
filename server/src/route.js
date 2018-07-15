/*eslint-disable */
const AuthenticationController = require("./controllers/AuthenticationController");
const AuthenticationControllerPolicy = require("./policy/AuthenticationControllerPolicy");

module.exports = app => {
  app.post("/register", AuthenticationController.register);
  app.post("/login", AuthenticationController.login);
};
