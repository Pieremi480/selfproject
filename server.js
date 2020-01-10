// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/codeRoom", function(request, response) {
  response.sendFile(__dirname + "/views/codeRoom.html");
});

app.get("/bedroom", function(request, response) {
  response.sendFile(__dirname + "/views/bedroom.html");
});

app.get("/kitchen", function(request, response) {
  response.sendFile(__dirname + "/views/kitchen.html");
});

app.get("/livingRoom", function(request, response) {
  response.sendFile(__dirname + "/views/livingRoom.html");
});

app.get("/testRoom", function(request, response) {
  response.sendFile(__dirname + "/views/testRoom.html");
});


app.get("/pit", function(request, response) {
  response.sendFile(__dirname + "/views/pit.html");
});


app.get("/furnace", function(request, response) {
  response.sendFile(__dirname + "/views/furnace.html");
});

app.get("/lab", function(request, response) {
  response.sendFile(__dirname + "/views/lab.html");
});

app.get("/garden", function(request, response) {
  response.sendFile(__dirname + "/views/garden.html");
});

app.get("/walkway", function(request, response) {
  response.sendFile(__dirname + "/views/walkway.html");
});

app.get("/outside", function(request, response) {
  response.sendFile(__dirname + "/views/outside.html");
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
