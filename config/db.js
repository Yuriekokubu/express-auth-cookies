const mongoose = require('mongoose');

const { mongoURI } = require('./default.json');

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.log('Something went wrong with Database connection');
    process.exit(1);
  }
};

module.exports = connectDB;
