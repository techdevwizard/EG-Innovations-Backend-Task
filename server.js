
const express = require("express");
const cors = require("cors");
const { ENV } = require("./config/env");
const connectDB = require("./config/db");

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

const authRoutes = require("./routes/AuthRoutes");
app.use("/api", authRoutes);

app.listen(ENV.PORT, () => {
    console.log(`App is running on http://localhost:${ENV.PORT}`);
});