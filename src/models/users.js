var mongoose = require('mongoose');

var userShcema =mongoose.Schema({
    email: String,
    password: String,
});
var User = module.exports = mongoose.model('User', userShcema)
