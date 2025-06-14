const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { ENV } = require("../config/env");

const seedUser = async () => {
    try {
        await mongoose.connect(ENV.MONGO_URL);
        console.log("Connected to MongoDB for seeding");

        const existing = await User.findOne({ username: ENV.USER_NAME });

        if (existing) {
            console.log("User already exists, skipping seeding.");
            return;
        }

        const hashedPassword = bcrypt.hashSync(ENV.PASSWORD,10);

        const newUser = new User({
            username:ENV.USER_NAME,
            password: hashedPassword,
        });

        await newUser.save();
        console.log("Admin user created successfully!");
    } catch (error) {
        console.error("Seeding failed:", error);
    }
};

seedUser();
