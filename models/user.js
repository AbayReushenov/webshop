const mongoose = require('mongoose');

const { Schema } = mongoose;
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minlength: 4,
    // match: /^[A-ZА-Я]\w+$/i,
  },
  email: {
    type: String,
    required: true,
    minlength: 3,
    // match: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  },
  pass: {
    type: String,
    required: true,
    minlength: 3,
    // match: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  },
  role: {
    type: Boolean, // true for seller, false for buyer
    required: true,
  },
});

module.exports = mongoose.model('User', UserSchema);
