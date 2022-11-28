import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebroute from "./routes/web.route";

let PORT = process.env.PORT || 8080;
require("dotenv").config();

const app = express();

configViewEngine(app);
initWebroute(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`App listening on port http://localhost:${PORT}`);
});
