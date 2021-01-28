const mongoose = require('mongoose');

const { Schema } = mongoose;
const cartSellerSchema = new mongoose.Schema({
  good: { type: Schema.Types.ObjectId, ref: 'Good' },
  seller: { type: Schema.Types.ObjectId, ref: 'User' },
  quantity: Number,
});

module.exports = mongoose.model('CartSeller', cartSellerSchema);
