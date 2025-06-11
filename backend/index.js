const express = require("express");
const connectDB = require("./config/database");
require("dotenv").config();

const app = express();

app.use(express.json());

connectDB()
  .then(() => {
    console.log("connected to database");
    app.listen(8000, () => {
      console.log("server is running on port 8000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
