const mongoose = require('mongoose');

const { Schema } = mongoose;
const productSchema = new mongoose.Schema({
  /*  название, описание, цена, артикул и фото */
  title: String,
  description: String,
  price: Number,
  art: String,
  imgPath: String,
});

module.exports = mongoose.model('Product', productSchema);
