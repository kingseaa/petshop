var mongoose = require("mongoose");

var productSchema = mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  accept_password: {
    type: String,
    require: true,
  },
 
});

var RegisterModal = (module.exports = mongoose.model("Register", productSchema));
module.exports.get = function (callback, limit) {
  RegisterModal.find(callback).limit(limit);
};


