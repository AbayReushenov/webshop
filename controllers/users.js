/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable global-require */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
const bcrypt = require('bcrypt');
const User = require('../models/user');

const saltRounds = 10;

function renderZero(req, res) {
  return res.render('user/zero', { title: 'Welcome!' });
}

function userAuth(req, res) {
  return res.render('user/auth', { title: 'Autorisation' });
}

function userReg(req, res) {
  return res.render('user/reg', { title: 'Registration' });
}

function userOut(req, res) {
  return res.render('user/out', { title: 'Have a good day!' });
}

async function regToBase(req, res) {
  const { name, email, pass } = req.body;
  if (name && email && pass) {
    const checkUserEmail = await User.findOne({ email });
    if (checkUserEmail) return res.render('user/zero', { title: 'This email have used' });
    try {
      let newRole;
      if (req.body.role === 'seller') {
        newRole = true;
      } else if (req.body.role === 'buyer') {
        newRole = false;
      } else {
        return res.render('user/zero', { title: 'Выберите роль' });
      }
      const hash = await bcrypt.hash(pass, saltRounds);
      const user = new User({
        name,
        pass: hash,
        email,
        role: newRole,
      });
      await user.save();
      req.session.user = {
        id: user._id,
      };
      return res.redirect('/main');
    } catch (err) {
      return res.redirect('/');
    }
  }
  return res.status(401).redirect('/reg');
}

async function authToBase(req, res) {
  const { email, pass } = req.body;
  if (email && pass) {
    try {
      const currentUser = await User.findOne({ email });
      if (currentUser) {
        if (await bcrypt.compare(pass, currentUser.pass)) {
          req.session.user = {
            id: currentUser._id,
          };
          return res.redirect('/main');
        }
      }
    } catch (error) {
      return res.redirect('/');
    }
  }
  return res.status(401).redirect('/auth');
}

async function logout(req, res) {
  req.session.destroy((err) => {
    if (err) return res.redirect('error', { error: err });
    res.clearCookie('sid');
    return res.redirect('/');
  });
}

module.exports = {
  userAuth,
  userReg,
  userOut,
  renderZero,
  regToBase,
  authToBase,
  logout,
};
