import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebroute from "./routes/web";
import path from "path";

let PORT = process.env.PORT || 8080;
require("dotenv").config();

const app = express();

initWebroute(app);
configViewEngine(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// để có thể CSS
app.use(express.static(__dirname + "/views"));

//tests

app.listen(PORT, () => {
  console.log(`App listening on port http://localhost:${PORT}`);
});
