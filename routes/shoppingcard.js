const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.render('shoppingcard');
});

router.post('/', (req, res, next) => {
  res.send('hello fedor');
});
module.exports = router;
