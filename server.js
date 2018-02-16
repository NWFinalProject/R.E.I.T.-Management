const express = require("express");
const bodyParser = require("body-parser");
//const session = require("express-session");
const app = express();
const PORT = process.env.PORT || 3001;
var db = require("./models");
var path = require("path");
var passport = require("./config/passport");
// Sets up the Express App
// =============================================================


// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory to be served
app.use(express.static("client/build"));

// We need to use sessions to keep track of our user's login status
//app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Routes
// =============================================================
// require("./app/routes/api-routes.js")(app);

// // Here we introduce HTML routing to serve different HTML files

require("./routes/api.js")(app);
// require("./routes/html-routes.js")(app);

// Starts the server to begin listening
// =============================================================


app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, "./client/build"));
});

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});