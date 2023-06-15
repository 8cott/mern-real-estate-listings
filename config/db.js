const mongoose = require('mongoose');
require('dotenv').config({ path: __dirname + '/../.env' });

// MONGOOSE CONNECTION
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.set('strictQuery', true);

module.exports = mongoose;