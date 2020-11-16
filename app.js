const express = require("express");
const app = express();

// oh forgot to put comment here :)
app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.get("/bye", (req, res) => {
  res.send("Bye!");
});

module.exports = app;
