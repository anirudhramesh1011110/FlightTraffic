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
mongoose.connect(connect);

var flights = require('./utils/flights');
var dir = require('./utils/directions');
var flight = require('./models/flight');


//var flightP = flights.getFlight(2222, '2016-09-24');
// flightP.then(function(result){
//   var res = JSON.parse(result).flightStatusResponse.statusResponse;
//   var flightnbr = res.flightStatusTO.flightNumber;
//   var date = new Date(res.flightStatusTO.flightOriginDate);
//   var airportCode = res.flightStatusTO.flightStatusLegTOList[1].departureAirportCode;
//   var loc = [res.flightStatusTO.flightStatusLegTOList[1].departureTsoagLatitudeDecimal, res.flightStatusTO.flightStatusLegTOList[1].departureTsoagLongitudeDecimal];
//   var f = new flight({
//     user: new mongoose.mongo.ObjectId('57e72bd5912dda36dfbc4a05'),
//     flight_number: flightnbr,
//     origin_address: loc,
//     flight_datetime: date,
//     airport_code: airportCode
//   });
//   f.save(function(err){
//     if(err){
//       console.log(err);
//     }else{
//       console.log('SAVED');
//     }
//   });
//
// });

// var flightModel = require('./models/flight');
// var f = new flightModel({
//   user: new mongoose.mongo.ObjectId('57e72bd5912dda36dfbc4a05');
//   flight_number:
//
// });




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
