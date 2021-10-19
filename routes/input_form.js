// Third-party modules
const express = require("express");

// local modules
const rootDir = require("../utils/path");

// router
const router = express.Router();

// constant to store user names
const usr_names = [];

router.get("/input_name", (req, res, next) => {
  console.log("Get Request: input_form.js -> router.get");
  res.render("input_form", {
    pageTitle: "Add Person Name",
  });
});

router.post("/input_name", (req, res, next) => {
  console.log("New name: " + req.body.user_name);
  usr_names.push({ name: req.body.user_name });
  res.redirect("/");
});

module.exports = {
  router: router,
  usr_names: usr_names,
};
