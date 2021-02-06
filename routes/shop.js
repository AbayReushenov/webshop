const express = require('express');

const router = express.Router();
const controllerShop = require('../controllers/shop');

router
  .route('/cards')
  .get(controllerShop.renderCard)
  .put(controllerShop.updateCards);

router.route('/showcart').get(controllerShop.showcart);

router.route('/:id').get(controllerShop.idItem);
module.exports = router;
