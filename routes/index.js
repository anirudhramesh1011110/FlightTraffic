var express = require('express');
var router = express.Router();

var FlightInfo = require('../utils/flights');
var Directions = require('../utils/directions');

var Flight = require('../models/flight')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/getFlightInfo', function(req, res, next){
  //console.log(req.body);
  var flightCode = req.body.flightCode;
  var flightDate = req.body.flightDate;
  Flight.find({flight_number: flightCode}, function(err, flight){
    if(err){
      console.log(err);
    }else{
      if(flight.length > 0){ //Already exists in DB
        console.log("FOund");
        var routeP = Directions.getRoute([34.082001, -118.411644], flight[0].origin_address);
        routeP.then(function(result){
          console.log("ISIDE PROMISE");
          res.send({data: result});
        });
      }else{ //Create new Flight entry

      }
    }
  })
});

module.exports = router;
