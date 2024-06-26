import mongoose from "mongoose";
import User from "../models/userModel.js";

const seedAdmin = async () => {
  const existingAdmin = await User.findOne({ email: "johnDoe789@gmail.com" });
  if (!existingAdmin) {
    const admin = await User.create({
      name: "Ilix",
      email: "johnDoe789@gmail.com",
      password: "Qwerty",
      role: "admin",
    });
    try {
      await admin.save();
      console.log("Admin user seeded successfully!");
    } catch (error) {
      console.error("Error seeding admin user:", error);
    }
  } else {
    console.log("Admin user already exists.");
  }
  mongoose.connection.close();
};

export default seedAdmin;
