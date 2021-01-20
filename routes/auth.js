const express = require('express');

const router = express.Router();
// const cookieParser = require('cookie-parser');
const Seller = require('../models/seller');
const Buyer = require('../models/buyer');

// router.get('/', (req, res) => {
//   res.redirect('/auth');
// });

router.get('/', (req, res) => {
  res.render('signin');
});

// router.post('/', async (req, res, next) => {
//   const { login, password } = req.body;
//   const user = await User.findOne({ login, password });
//   if (user) {
//     req.session.username = login;
//     return res.redirect('/');
//   }
//   return res.render('/', { error: true });
// });

module.exports = router;
