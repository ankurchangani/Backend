
const mongoose = require("mongoose");
    
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://changaniankur100:VVnc958Zse5Clx3T@cluster0.ke3aeat.mongodb.net/crud", {
    });
    console.log("MongoDB Connected with Mongoose");
  } catch (err) {
    console.error("MongoDB connection failed:", err);
    process.exit(1);
  }
};

module.exports = connectDB;
