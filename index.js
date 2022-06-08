// REQUIRING MODULES
const express = require("express");
const path = require("path");

// SETTINGS
const app = express();
const PORT = process.env.PORT || 5000;

// MIDDLEWARES
app.use(express.static(path.join(__dirname, "src", "public")));
app.set("views", path.join(__dirname, "src", "views"));
app.set("view engine", "ejs");

// ROUTES
app.get("/", (req, res) => {
  res.render("index");
});

// SERVER LISTENING
app.listen(PORT, () => {
  console.log("server listening on port: " + PORT);
});

module.exports = app;
