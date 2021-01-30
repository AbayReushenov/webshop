const User = require('../models/user');
const CartBuer = require('../models/cartBuer');

const checkAuth = async (req, res, next) => {
  const userId = req.session?.user?.id;
  if (userId) {
    const user = await User.findById(userId);
    if (user) {
      res.locals.name = user.name; /* res.locals.name =  локальная переменная ответа */
      // req.app.locals.aaa = 'aaa'; /* req.app.locals = глобальные переменые */
      const cartItemArrayNum = await CartBuer.find({ buyer: userId });
      const count = cartItemArrayNum.length;
      res.locals.cartcount = count;
      res.locals.buscet = cartItemArrayNum;
      return next();
    }
    return res.status(401).redirect('/');
  }
  return res.status(401).redirect('/');
};

module.exports = {
  checkAuth,
};
