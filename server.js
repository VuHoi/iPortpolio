const express = require('express');
var createError = require('http-errors');
const path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var mongoose = require('mongoose');
var portfolio = require('./apis/PortfolioController');
var user = require('./apis/UserController');
var contact = require('./apis/ContactController')
var dbConfig=require('./middlewares/db');
const app = express();

var configRoute=require('./middlewares/configRoute');
mongoose.connect(dbConfig.url,{ useNewUrlParser: true });
var db = mongoose.connection;
// Serve only the static files form the dist directory
app.use(express.static('./dist/iPortfolio'));
app.use(express.json());
app.set('superSecret', dbConfig.secret);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//confiure router api
app.all('/*', configRoute);
app.all('/api/*', [require('./middlewares/validateRequest')]);
portfolio(app);
user(app);
contact(app);
app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname,'/dist/iPortfolio/index.html'));
});

app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
  
app.use(session({
    secret: 'workhard',
    resave: true,
    saveUninitialized: false,
    cookie: {  },
    store: new MongoStore({
        mongooseConnection: db
    })
}));

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 3000);

// app.listen(process.env.PORT || 3000,'192.168.1.105');
