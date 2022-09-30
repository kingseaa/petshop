import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebroute from './routes/web';

let PORT = process.env.PORT || 8080;
require('dotenv').config();

const app = express();

initWebroute(app);
configViewEngine(app);

app.use(express.json());
app.use(express.urlencoded({}));
//tests

app.listen(PORT, () => {
  console.log(`App listening on port http://localhost:${PORT}`)
})