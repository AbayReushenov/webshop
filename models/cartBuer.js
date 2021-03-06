const mongoose = require('mongoose');

const { Schema } = mongoose;
const cartBuerSchema = new mongoose.Schema({
  good: { type: Schema.Types.ObjectId, ref: 'Product' },
  buyer: { type: Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('CartBuer', cartBuerSchema);
