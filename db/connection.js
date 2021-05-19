
require("dotenv").config();

const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI;

const config = { useUnifiedTopology: true, useNewUrlParser: true };

mongoose.connect(MONGODB_URI, config);


mongoose.connection
  .on("open", () => console.log("Mongo is Connected and Ready"))
  .on("close", () => console.log("Mongo is Closed and Unconnected"))
  .on("error", (error) =>
    console.log("MONGO CONNECTION ERROR \n***************\n", error)
  );


module.exports = mongoose;