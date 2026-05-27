const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    // Do NOT process.exit(1) here in a serverless environment! 
    // It kills the function immediately and returns a blank 500 error.
  }
};

module.exports = connectDB;
