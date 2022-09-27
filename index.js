const express = require("express");
const mysql = require("mysql2");

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "project",
});

let app = express();
// view engine EJS

app.use(express.json());
app.use(express.urlencoded({}));

app.use(express.static("./src/public"));
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("hello.ejs");
});

let PORT = 6969 || 8080;

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
