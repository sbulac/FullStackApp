const express = require("express");
const jwt = require("../middlewares/jwt");
module.exports = (app) => {
  const router = express.Router();

  app.use("/users", router);
  router.get("/", (req, res) => {
    res.send("sisax");
  });
  router.post("/", jwt);
};
