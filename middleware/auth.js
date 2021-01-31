const User = require('../models/user');
const CartBuer = require('../models/cartBuer');

const checkAuth = async (req, res, next) => {
  const userId = req.session?.user?.id;
  if (userId) {
    const user = await User.findById(userId);
    if (user) {
      res.locals.name = user.name; /* res.locals.name =  локальная переменная ответа */
      // req.app.locals.aaa = 'aaa'; /* req.app.locals = глобальные переменые */
      const docs = await CartBuer.find({ buyer: userId }).populate('good');
      //---------------------------------------------------------------
      // const docs = await CartBuer.aggregate()
      //   .match({ buyer: { $eq: userId } })
      //   .group({ _id: '$good', count: { $sum: 1 } });

      //--------------------------------------------------------------
      const count = await CartBuer.count({ buyer: userId });
      res.locals.cartcount = count;
      res.locals.buscet = docs;
      return next();
    }
    return res.status(401).redirect('/');
  }
  return res.status(401).redirect('/');
};

module.exports = {
  checkAuth,
};
