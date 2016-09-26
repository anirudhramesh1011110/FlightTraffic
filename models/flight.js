var mongoose = require('mongoose');

var flightSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  flight_number: {
    type: String,
    required: true
  },
  origin_address: {
    type: []      //[Lat, Lng]
  },
  flight_datetime: {
    type: Date
  },
  airport_code: {
    type: String
  }

});


module.exports = mongoose.model('Flight', flightSchema);
