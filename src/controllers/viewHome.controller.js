import pool from "../configs/connectDB";

let addProduct = (req, res) => {
  return res.render("addproduct");
};

const managementproducts = (req, res) => {
  return res.render("managementproducts");
};

module.exports = { addProduct, managementproducts };
