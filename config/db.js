const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      console.error('Error: MONGODB_URI environment variable is not set.');
      process.exit(1); // Exit the process if MONGODB_URI is not set
    }

    // Connect to MongoDB Atlas
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB URI: ", process.env.MONGODB_URI); // Log URI to confirm it's correct


    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit the process if MongoDB connection fails
  }
};

module.exports = connectDB;
