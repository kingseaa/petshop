var express = require("express");
var router = express.Router();
var product = require("../controllers/viewHome.controller");
// get homepage
router.get("/v1/management", product.listProduct);

// router.get("/v1/management", homeController.managementproducts);
// router.get("/v1/management/users", homeController.managementUsers);
router.get("/v1/management/addproduct", product.getProductCreate);
router.post("/v1/management/addproduct", product.addProduct);
// router.get("/v1/invoice", homeController.invoiceManagement);
// router.get("/v1/login", homeController.login);
module.exports = router;
