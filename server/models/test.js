const mongoose = require('mongoose');

const nameSchema = mongoose.Schema({
  name: String
});

module.exports = mongoose.model('Name', nameSchema);
