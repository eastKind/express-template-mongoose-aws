require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env || 5000;

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('Mongo DB connection successful!');
  app.listen(() => {
    console.log(`Server is listening on port ${PORT}`);
  });
});
