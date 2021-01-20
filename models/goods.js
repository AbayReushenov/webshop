const mongoose = require('mongoose');

const { Schema } = mongoose;
const goodSchema = new mongoose.Schema({
  /*   _id: Schema.Types.ObjectId, */
  title: String,
  description: String,
  price: Number,
  art: String,
  photo: String,
  countadded: Number,
  countsold: Number,
  seller: { type: Schema.Types.ObjectId, ref: 'Seller' },
});

module.exports = mongoose.model('Good', goodSchema);
