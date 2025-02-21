const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// const connectionString = process.env.MONGO_URI;

const connectDB = (url) => {
    return mongoose.connect(url)
}

module.exports = connectDB
