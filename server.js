const express = require("express");
const path = require("path");
const cors = require ("cors");
const app = express();
const bodyParser = require("body-parser");

// Serve the static files
app.use(express.static(__dirname + "/affordly/build/"));

const payment = require("./API/Routes/payment");

app.use(cors()); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://affordly:affordly123@cluster0.lzi2l.mongodb.net/affordly?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }
);
app.use("/payment", payment);

app.get("/*", (req, res) => {
  //defining the path for the static files
  res.sendFile(path.join(__dirname + "/affordly/build/index.html"));
});

const port = process.env.PORT || 3000; // defining a port
app.listen(port, () => {
  console.log("server is listening on :  ", port);
});