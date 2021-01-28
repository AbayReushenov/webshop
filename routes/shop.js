const express = require('express');

const router = express.Router();
const controllerShop = require('../controllers/shop');

router.route('/cards')
  .get(controllerShop.renderCard);
// .post(controllerShop.cards);
module.exports = router;

router.route('/:id')
  .get(controllerShop.idItem);
