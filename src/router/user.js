const express = require("express");

module.exports = (app) => {
  const router = express.Router();

  app.use("/users", router);

  router.get("/:id", (req, res, next) => {
    res.send("");
  });

  router.post("/create-user", (req, res, next) => {
    res.send("");
  });
};
