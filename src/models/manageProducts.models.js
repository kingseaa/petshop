var mongoose = require("mongoose");

var productSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  amount: {
    type: Number,
    require: true,
  },
  desc: {
    type: String,
    require: true,
  },
  picture: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  sold: {
    type: Number,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
});

var ProductModel = (module.exports = mongoose.model("Product", productSchema));
module.exports.get = function (callback, limit) {
  ProductModel.find(callback).limit(limit);
};


