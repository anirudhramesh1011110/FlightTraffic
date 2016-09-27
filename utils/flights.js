var request = require('request');

var Flight = {};

/*
 * Flight Date: YYYY-MM-DD
 */

Flight.getFlight = function(flight_number, flight_date) {

  var url = 'https://demo30-test.apigee.net/v1/hack/status?'
             + '&flightNumber=' + flight_number
             + '&flightOriginDate=' + flight_date
             + '&apikey=' + process.env.DELTA_API_KEY;

  return new Promise(function(resolve, reject) {
    request(url, function(error, response, body) {
      //console.log('response', body);
      if(error) {
        reject(error);
      }else{
        resolve(body);
      }
    });
  });

};

/*
  Get Airport Information.
*/

Flight.getAirport = function(airport_code) {

  var url = 'https://demo30-test.apigee.net/v1/hack/search/airport?'
             + 'code=' + airport_code
             + '&apikey=' + process.env.DELTA_API_KEY;

  return new Promise(function(resolve, reject) {
    request(url, function(error, response, body) {
      //console.log('Airport Info: ', body);
      if(error) {
        reject(error);
      }else{
        resolve(body);
      }
    });
  });


};

//1234
//2016-09-24

module.exports = Flight;
