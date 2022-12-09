var express = require("express");
var router = express.Router();
var product = require("../controllers/viewHome.controller");
// get homepage
router.get("/v1/management", product.listProduct);
router.get("/v1/login", product.getLogin);

router.get("/v1/register", product.getRegister);
router.post("/v1/register", product.postRegister);
// router.get("/v1/management", homeController.managementproducts);
// get: lấy dữ liệu từ server về
// post: gửi dữ liệu từ client lên server
// router.get("/v1/management/users", homeController.managementUsers);
router.get("/v1/management/addproduct", product.getProductCreate);
router.post("/v1/management/addproduct", product.addProduct);
// sua san pham
router.get("/v1/management/edit/:id", product.getProductUpdate);
router.post("/v1/management/edit/:id", product.postProduct);
// router.get("/v1/invoice", homeController.invoiceManagement);
// router.get("/v1/login", homeController.login);

router.get("/v1/management/delete/:id", product.getProductDelete);
router.post("/v1/management/delete/:id", product.postProductDelete);

//search
router.post("/v1/management/search", product.searchProduct);

module.exports = router;
