require("dotenv").config();
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
require("console-stamp")(console);
const port = process.env.PORT;

const app = express();
app.use(express.json());

// Configuring routes
const allRoutes = require("./routes/routes");
app.use(allRoutes);

// DB connection
mongoose.connect("mongodb://localhost:27017/testDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("Database Connected");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
