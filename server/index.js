const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const userRoute = require("./Routes/UserRoute");

const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use("/user", userRoute);

const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

app.listen(port, (req, res) => {
  console.log(`Server is running on port: ${port}`);
});

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB database connection established successfully");
  })
  .catch((err) => {
    console.log(err);
  });
