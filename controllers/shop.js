/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable global-require */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
// const bcrypt = require('bcrypt');
const Product = require('../models/product');
const CartBuer = require('../models/cartBuer');

// const saltRounds = 10;

function renderCard(req, res) {
  Product.find((error, data) => {
    const boxProducts = [];
    const displaySize = 3;
    for (let i = 0; i < data.length; i += displaySize) {
      boxProducts.push(data.slice(i, i + displaySize));
    }
    return res.render('shop/cards', {
      title: 'Shopping Cart',
      products: boxProducts,
    });
  });
}

async function idItem(req, res, next) {
  const uuu = req.params.id;
  const item = await Product.findOne({ _id: uuu });
  const cartItem = new CartBuer({
    good: item._id,
    buyer: req.session.user.id,
  });
  await cartItem.save();
  return res.redirect('/shop/cards');
}

function showcart(req, res) {
  res.send({ title: 'hello' });
  /*   Product.find((error, data) => {
      const boxProducts = [];
      const displaySize = 3;
      for (let i = 0; i < data.length; i += displaySize) {
        boxProducts.push(data.slice(i, i + displaySize));
      }
      return res.render('shop/cards', { title: 'Shopping Cart', products: boxProducts });
    }); */
}

async function updateCards(req, res, next) {
  const { body } = req.body;
  const { custom_id } = req.body;
  await CartBuer.deleteMany({ buyer: custom_id });
  await CartBuer.insertMany(body);
  const result = await CartBuer.find({ buyer: custom_id });
  return res.json({ result });
}

module.exports = {
  renderCard,
  idItem,
  showcart,
  updateCards,
};
