const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

const { MONGO_USERNAME, MONGO_PASSWORD } = process.env;

mongoose.connect('mongodb+srv://tanisharawat1100:G8XlndwnBWjSP5DZ@cluster0.4y8poxa.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to the db'));

db.once('open', function () {
  console.log("Successfully connected to the Database");
});

module.exports = db;
