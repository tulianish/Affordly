const express = require("express");
const path = require("path");
const app = express();

const postRoute = require('./api/routes/postRoute');

// Serve the static files
app.use(express.static(__dirname + "/affordly/build/"));

//CORS and body-parser
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Post route definition
app.use('/api',postRoute);

app.get("/*", (req, res) => {
  //defining the path for the static files
  res.sendFile(path.join(__dirname + "/affordly/build/index.html"));
});

const port = process.env.PORT || 3001; // defining a port
app.listen(port, () => {
  console.log("server is listening on :  ", port);
});