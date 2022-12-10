const Product = require("../models/manageProducts.models");
const Register = require("../models/users.models");

exports.getLogin = (req, res) => {
  res.render("login.ejs");
};
exports.getRegister = (req, res) => {
  res.render("register.ejs");
};

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

//xoa method get
exports.getProductDelete = (req, res, next) => {
  const ID = req.params.id;
  Product.findById(ID, function (err, resData) {
    console.log(" du lieu query %j", resData);
    res.render("./delete", { data: resData });
  });
};
// xoa voi method post
exports.postProductDelete = (req, res, next) => {
  Product.deleteOne({ _id: req.params.id }, function (err) {
    if (err) console.log(err);
    res.redirect("/v1/management");
  });
};

exports.getProductUpdate = (req, res, next) => {
  const ID = req.params.id;
  Product.findById(ID, function (err, adventure) {
    res.render("edit", { data: adventure });
  });
};

exports.postProduct = (req, res, next) => {
  const data = {
    name: req.body.name,
    price: req.body.price,
    desc: req.body.desc,
    amount: req.body.amount,
    picture: req.body.picture,
    sold: req.body.sold,
    type: req.body.type,
  };
  Product.update({ _id: req.params.id }, data, function (err, raw) {
    if (err) {
      res.send(err);
    }
    res.redirect("/v1/management");
  });
};

exports.postRegister = (req, res) => {
  console.log(req.body);
  var data = new Register();
  data.email = req.body.email;
  data.password = req.body.password;
  data.accept_password = req.body.accept_password;

  data.save(function (err) {
    console.log(err);
    res.redirect("/v1/register");
  });
};

exports.searchProduct = async (req, res) => {
  let data = await Product.find({
    $or: [{ name: { $regex: req.body.search } }],
  });

  res.render("managementproducts", { data: data });
};
