const mongoose = require('mongoose');

const connectDatabase = async (mongoUri) => {
  if (!mongoUri) {
    throw new Error('Missing MongoDB connection string');
  }

  await mongoose.connect(mongoUri);
  return mongoose.connection;
};

module.exports = { connectDatabase };
