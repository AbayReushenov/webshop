const createError = require('http-errors');
const express = require('express');
const session = require('express-session');
const methodOverride = require('method-override');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/webshoping', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const authRouter = require('./routes/auth');
const regRouter = require('./routes/reg');
const itemsforsaleRouter = require('./routes/itemsforsale');
const shopingcardRouter = require('./routes/shoppingcard');
const homeRouter = require('./routes/home');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  // store: new FileStore({}), // 😎 не нужно
  secret: '4509ytugj3onvq3458tugq8903e', // случайный набор символов для шифрования сессионных куков
  resave: true, // пересохранять сессию даже если ничего не изменилось
  saveUninitialized: true, // сохранять сессию при первом обращении к сайту
  cookie: { secure: false }, // опции сессонных куков ( secure - это httpS )
}));

app.use((req, res, next) => {
  res.locals.username = req.session?.username; // записываем в локалс имя юзера из сессии
  next();
});

// Allows you to use PUT, DELETE with forms.
app.use(methodOverride((req, res) => {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

app.use('/', homeRouter);
app.use('/auth', authRouter);
app.use('/reg', regRouter);
app.use('/shopingcard', shopingcardRouter);
app.use('/itemsforsale', itemsforsaleRouter);


// // catch 404 and forward to error handler
// app.use((req, res, next) => {
//   next(createError(404));
// });

// error handler
// app.use((err, req, res, next) => {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
