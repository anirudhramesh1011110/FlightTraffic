var mongoose = require('mongoose');

var flightSchema = new mongoose.Schema({
  user: {
    type: Mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  flight_number: {
    type: String,
    required: true
  },
  origin_address: {
    type: []      //[Lat, Lng]
  },
  flight_date: {
    type: Date
  },
  flight_time: {
    type: Date
  }

});


module.exports = mongoose.model('Flight', flightSchema);
