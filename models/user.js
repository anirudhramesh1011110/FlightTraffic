var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  firstname: {
    type: String,

  },
  lastname: {
    type: String,

  },
  email: {
    type: String,

  },
  password: {
    type: String,
    
  }
});

module.exports = mongoose.model('User', userSchema);
