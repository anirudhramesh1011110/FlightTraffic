var googleMapsClient = require('@google/maps').createClient({
  key: process.env.GOOGLE_MAPS_KEY
});

var Directions = {};

Directions.getLocation = function(full_address) {
  return new Promise(function(resolve, reject){
    googleMapsClient.geocode({
      address: full_address
    }, function(err, response) {
      if (!err) {
        var location = response.json.results[0].geometry.location;
        resolve(location);
      }else{
        reject(error);
      }
    });
  });
};

Directions.getRoute = function(origin, dest) {
  return new Promise(function(resolve, reject){
    googleMapsClient.directions({
      origin: origin,
      destination: dest,
      alternatives: true,
      optimize: true,
      arrival_time: '1474711380001'
    }, function(err, response) {
      if (!err) {
        var duration = response.json.routes[0].legs[0].duration;
        //console.log(duration);
        resolve(duration);
      }else{
        reject(err);
      }
    });
  });



};


module.exports = Directions;
