const express = require("express");
const path = require("path");

const app = express();

// Serve the static files
app.use(express.static(__dirname + "/affordly/build/"));

app.get("/*", (req, res) => {
  //defining the path for the static files
  res.sendFile(path.join(__dirname + "/affordly/build/index.html"));
});

const port = process.env.PORT || 3000; // defining a port
app.listen(port, () => {
  console.log("server is listening on :  ", port);
});