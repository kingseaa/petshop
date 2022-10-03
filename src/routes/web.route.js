import homeController from "../controllers/viewHome.controller";
import express from "express";
let router = express.Router();

const initWebroute = (app) => {
  router.get("/v1/management", homeController.managementproducts);

  
  return app.use("/", router);

};

export default initWebroute;
