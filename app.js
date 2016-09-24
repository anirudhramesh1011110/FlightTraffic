var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

var flight = require('./utils/flights');
var dir = require('./utils/directions');

var p = dir.getLocation('801 Atlantic Dr NW, Atlanta, GA 30332');
p.then(function(result) {
  console.log(result);
});

// var p = dir.getRoute([33.7773412, -84.39732959999999], [33.9897215, -84.4420728]);
// p.then(function(result) {
//   console.log(result);
// });

// var p = flight.getFlight(1234, '2016-09-24');
// p.then(function(result){
//   console.log(result);
// })

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//Configure Database ==========================================================
var connect = process.env.MONGODB_URI;
mongoose.connect;


//Configure Routes ============================================================
app.use('/', routes);
app.use('/users', users);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
