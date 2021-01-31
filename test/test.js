const User = require('../models/user');
const CartBuer = require('../models/cartBuer');

const test = async (req, res, next) => {
  const userId = req.session?.user?.id;
  if (userId) {
    const user = await User.findById(userId);
    if (user) {
      
      const aggregatorOpts = [{
        $unwind: '$items',
      },
      {
        $group: {
          _id: '$items.productId',
          count: { $sum: 1 },
        },
      },
      ];

      Model.aggregate(aggregatorOpts).exec();
      // which gives :

      // { "_id" : "789", "count" : 1 }
      // { "_id" : "456", "count" : 2 }
      // { "_id" : "123", "count" : 3 }
      const cartItemArrayNum = await CartBuer.find({ buyer: userId }).populate('Product');
      const count = await CartBuer.count({ buyer: userId });
      res.locals.cartcount = count;
      res.locals.buscet = cartItemArrayNum;
      return next();
    }
    return res.status(401).redirect('/');
  }
  return res.status(401).redirect('/');
};

module.exports = {
  test,
};
