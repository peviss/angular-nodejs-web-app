const express = require('express');
var app = express();
var mysql = require('mysql');
var connection  = require('./db');

app.use(require('./routes'));

app.get("/api", (req,res) => {
  res.json({
    status: "ok",
    message: "API working"
  })
});

app.get("/api/version", (req,res) => {
  res.json({
    version: "1.0",
    date: "5/3/20"
  })
});

app.listen(3001, () => {
  console.log('Example app listening on port 3001!');
});

module.exports = app;
