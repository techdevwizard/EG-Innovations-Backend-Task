const mongoose = require("mongoose");
const {ENV} = require("./env");

const connectDB = async () => {
    try {
        await mongoose.connect(ENV.MONGO_URL);
        console.log(" MongoDB Connected");
    } catch (err) {
        console.error(" MongoDB connection error:", err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
