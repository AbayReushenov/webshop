/* eslint-disable global-require */
const express = require('express');

const router = express.Router();
const cookieParser = require('cookie-parser');

router.get('/', (req, res) => {
  res.render('signup');
});

router.post('/', async (req, res, next) => {
  let user;
  // const { username, login, password } = req.body;
  if (req.body.role === 'seller') {
    // eslint-disable-next-line global-require
    const Seller = require('../models/seller');
    user = await Seller.create(req.body);
  } if (req.body.role === 'buyer') {
    const Buyer = require('../models/buyer');
    user = await Buyer.create(req.body);
  }

  if (user) {
    req.session.username = req.body.login;
    return res.render('/index', user);
  }
  return res.render('error', { error: true });
});
module.exports = router;
