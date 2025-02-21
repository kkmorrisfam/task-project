const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectionString = process.env.MONGO_URI;

mongoose
  .connect(connectionString)
  .then(() => console.log("CONNECTED TO THE DB..."))
  .catch((err) => console.log(err));
