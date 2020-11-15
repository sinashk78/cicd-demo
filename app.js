const express = require("express");
const app = express();

// oh forgot to put comment here :)
app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

module.exports = app;
