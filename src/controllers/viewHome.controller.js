import pool from "../configs/connectDB";

let addProduct = (req, res) => {
  return res.render("addproduct");
};

const managementproducts = (req, res) => {
  return res.render("managementproducts");
};
const managementUsers = (req, res) => {
  return res.render("managementUsers");
};

const invoiceManagement = (req, res) => {
  return res.render("invoicemanagement");
};


const login = (req, res) => {
  return res.render("login");
};

const register = (req, res) => {
  return res.render("register");
};

module.exports = { addProduct, managementproducts, invoiceManagement,login,managementUsers,register
 };
