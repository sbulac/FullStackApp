const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();
const config = require("./config");

const app = express();
const userApi = require("./router/user");

app.use(bodyParser.json());

userApi(app);

app.listen(config.port, () => {
  console.log(`Running on port: ${config.port}`);
});
