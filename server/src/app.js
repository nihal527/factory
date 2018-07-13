const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const { sequlize } = require("./models");
const config = require("./config/config");

const app = express();

app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

// app.listen(process.env.PORT || 8081);
require("./route")(app);
sequlize.sync().then(() => {
  app.listen(config.port);
  console.log("server started on port ", config.port);
});
