const mongoose = require('mongoose');

const { Schema } = mongoose;
const storeSchema = new mongoose.Schema({
  good: { type: Schema.Types.ObjectId, ref: 'Good' },
  quantity: Number,
});

module.exports = mongoose.model('Store', storeSchema);
