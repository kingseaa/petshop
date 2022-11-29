const Product = require("../models/manageProducts.models");

//lay ra danh sach product
exports.listProduct = (req, res, next) => {
  Product.get(function (err, data) {
    if (err) {
      console.log("co loi xay ra");
    } else {
      res.render("managementproducts", { data: data });
    }
  });
};
exports.getProductCreate = (req, res, next) => {
  res.render("addproduct");
};

exports.addProduct = (req, res, next) => {
  console.log("data gui tu form nhap len %j", req.body);

  var data = new Product();
  data.name = req.body.name;
  data.price = req.body.price;
  data.desc = req.body.desc;
  data.amount = req.body.amount;
  data.picture = req.body.picture;
  data.sold = req.body.sold;
  data.type = req.body.type;

  data.save(function (err) {
    console.log(err);
    res.redirect("/v1/management");
  });
};
