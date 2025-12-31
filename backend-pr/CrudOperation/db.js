const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://changaniankur:ed6BSqR8AzzIfWDV@cluster0.uzfuetj.mongodb.net/crud', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Database connected");
  } catch (err) {
    console.error("❌ Database connection error:", err);
  }
};

module.exports = connectDB;
