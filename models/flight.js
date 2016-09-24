var mongoose = require('mongoose');

var flightSchema = new mongoose.Schema({
  user: {
    type: Mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  flight_number: {
    type: String,
    required: true
  }
});


module.exports = mongoose.model('Flight', flightSchema);
