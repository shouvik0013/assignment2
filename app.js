// Third-party modules
const express = require("express");
const bodyParser = require("body-parser");

// express app
const app = express();

// setting ejs
app.set("view engine", "ejs");
app.set("views", "views");
