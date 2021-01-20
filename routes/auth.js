const express = require('express');

const router = express.Router();
const cookieParser = require('cookie-parser');

router.get('/', (req, res) => {
  res.render('signin', { flag: false });
});

router.post('/', async (req, res, next) => {
  const { login, password } = req.body;
  console.log('--11--', login, password);

  const Seller = require('../models/seller');
  let user = await Seller.findOne({ login, password });
  console.log('--22--', user);

  if (!user) {
    res.redirect('/');
  }

  console.log('--Seller--', user);
  if (!user) {
    const Buyer = require('../models/buyer');
    user = await Buyer.findOne({ login, password });
    console.log('--Buer--', user);
  } else if (user) {
    req.session.username = login;
    return res.render('/index', user);
  }
  console.log('------------> err');
  return res.render('/', { error: true });
});

module.exports = router;
