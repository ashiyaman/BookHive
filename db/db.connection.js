const mongoose = require("mongoose");

const mongoURI = process.env.MONGODB_URI;

const initializeDatabase = async () => {
    console.log('..in db')
  try {
    const connection = await mongoose.connect(mongoURI);
    if (connection) {
      console.log("Connected Successfully");
    }
  } catch (error) {
    console.log("Connection Failed", error);
  }
};

module.exports = { initializeDatabase };
