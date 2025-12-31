const mogoose = require('mongoose');

const userSchema =  new mogoose.Schema({
  username : {
    type : String,
    required : true,
  }, 
  email : {
    type : String,
    required : true,
    unique : true,
  },
  password : {
    type : String,
    required : true,
  }
})

const User = mogoose.model('User', userSchema);

module.exports = User