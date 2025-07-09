import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/FirstDB");
    console.log("MongoDB connecté");
  } catch (err) {
    console.error("MongoDB erreur de connection:", err);
  }
};

export { connectDB };
