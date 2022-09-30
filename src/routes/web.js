import homeController from '../controllers/viewHome'
import express from 'express';
let router = express.Router();

const initWebroute = (app) =>{
    router.get("/", homeController.getHome);

      return app.use('/', router);
}

export default initWebroute;