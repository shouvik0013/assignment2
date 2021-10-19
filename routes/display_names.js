// third-party modules
const express = require("express");

// local modules
const user_names_route = require("./input_form");

// user names constant
const user_names = user_names_route.usr_names;

// router
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("index", {
    pageTitle: "Users",
    users: user_names,
  });
});

module.exports = router;
