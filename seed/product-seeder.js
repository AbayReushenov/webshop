/* eslint-disable no-loop-func */
/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');
const Product = require('../models/product');
const dbConnect = require('../data/database');
const { defaultConfiguration } = require('../app');

dbConnect();

const products = [new Product({
  title: 'Lorem upsum7',
  description: 'LorefsfdfffdLorem upsum Lorem upsum Lorem upsum  ',
  price: 1900,
  art: 13434,
  imgPath: 'https://picsum.photos/200/300.jpg',
}),
new Product({
  title: 'Lorem upsum 8',
  description: 'Lorem upsum Lorem upsum Lorem upsum Lorem upsum  ',
  price: 1000,
  art: 189,
  imgPath: 'https://picsum.photos/200/300.jpg',
}),
new Product({
  title: 'Lorem upsum 9',
  description: 'Lorem upsum Lorem upsum Lorem upsum Lorem upsum  ',
  price: 600,
  art: 107,
  imgPath: 'https://picsum.photos/200/300.jpg',
}),
new Product({
  title: 'Lorem upsum 99',
  description: 'Lorem upsum Lorem upsum Lorem upsum Lorem upsum  ',
  price: 1005,
  art: 115,
  imgPath: 'https://picsum.photos/200/300.jpg',
}),
new Product({
  title: 'Lorem upsum 66',
  description: 'Lorem upsum Lorem upsum Lorem upsum Lorem upsum  ',
  price: 10,
  art: 114,
  imgPath: 'https://picsum.photos/200/300.jpg',
}),
new Product({
  title: 'Lorem upsum 6',
  description: 'Lorem upsum Lorem upsum Lorem upsum Lorem upsum  ',
  price: 10,
  art: 1002,
  imgPath: 'https://picsum.photos/200/300.jpg',
}),
];

let done = 0;
function exit() {
  mongoose.disconnect();
}
for (let i = 0; i < products.length; i += 1) {
  products[i].save((err, result) => {
    done += 1;
    if (done === products.length) {
      exit();
    }
  });
}
// node product-seeder.js
