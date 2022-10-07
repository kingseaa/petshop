import pool from "../configs/connectDB";

let addProduct = (req, res) => {
  return res.render("addproduct");
};

const managementproducts = (req, res) => {
  return res.render("managementproducts");
};

const invoiceManagement = (req, res) => {
  return res.render("invoicemanagement");
};


const login = (req, res) => {
  return res.render("login");
};

module.exports = { addProduct, managementproducts, invoiceManagement,login
 };
