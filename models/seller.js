const mongoose = require('mongoose');

const { Schema } = mongoose;
const sellerSchema = new Schema({
/*  // _id: Schema.Types.ObjectId, */
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 4,
    // match: /^[A-ZА-Я]\w+$/i,
  },
  login: {
    type: String,
    required: true,
    minlength: 3,
    // match: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  },
  password: {
    type: String,
    required: true,
    minlength: 1,
  },
});

module.exports = mongoose.model('Seller', sellerSchema);
