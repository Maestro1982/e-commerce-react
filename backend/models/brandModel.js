const mongoose = require('mongoose');

// Declare the Schema of the Mongo model
const brandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
});

//Export the model
module.exports = mongoose.model('Brand', brandSchema);
