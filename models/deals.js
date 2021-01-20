const mongoose = require('mongoose');

const { Schema } = mongoose;
const dealSchema = new mongoose.Schema({
  /*   _id: Schema.Types.ObjectId, */
  good: { type: Schema.Types.ObjectId, ref: 'Good' },
  countdeal: Number,
  seller: { type: Schema.Types.ObjectId, ref: 'Seller' },
  buyer: { type: Schema.Types.ObjectId, ref: 'Buyer' },
});

module.exports = mongoose.model('Deal', dealSchema);
