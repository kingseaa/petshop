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


//B1: tạo thẻ form có action và method, action => router.post("/v1/register", product.postRegister), method = post
//B2: tạo router.post("/v1/register", product.postRegister);
//B3: tạo controllers postRegister
//B4: gửi dữ liệu từ form tới models và lưu dữ liệu