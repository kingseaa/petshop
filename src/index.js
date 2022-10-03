import { config } from "dotenv";
import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebroute from "./routes/web.route";
import * as dotenv from "dotenv";
dotenv.config();
require("dotenv").config();

let PORT = process.env.PORT || 8080;

const app = express();

configViewEngine(app);
initWebroute(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`App listening on port http://localhost:${PORT}`);
});
