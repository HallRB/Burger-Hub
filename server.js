// dependencies
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// create express app instance.
const app = express();

// set Handlebars.
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application
app.use(bodyParser.urlencoded({ extended: true }));

// parse application json
app.use(bodyParser.json());

// import routes and give them server access
const routes = require("./controllers/burgerController.js");
app.use(routes);
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});
