// Third-party modules
const express = require("express");
const bodyParser = require("body-parser");

// local modules
const rootDir = require("./utils/path");
const input_form_routes = require("./routes/input_form");
const display_names_route = require("./routes/display_names");

// express app
const app = express();

// setting ejs/templating engine
app.set("view engine", "ejs");
app.set("views", "views");

// adding body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", input_form_routes.router);
app.use(display_names_route);

app.listen(3000);
