import pool from "../configs/connectDB";

let getHome = (req, res) => {
  return res.render("Hello World");
};

const managementproducts = (req, res) => {
  return res.render("managementproducts");
};

module.exports = { getHome, managementproducts };
