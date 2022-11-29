var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

let PORT = process.env.PORT || 8080;
require("dotenv").config();

var indexRouter = require("./routes/index");

let mongoose = require("mongoose");
const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

mongoose.connect("mongodb://127.0.0.1:27017/petStar", {
  useNewUrlParser: true,
});
var db = mongoose.connection;
if (!db) {
  console.log("database khong ket noi duoc");
} else {
  console.log("da ket noi voi database");
}
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(PORT, () => {
  console.log(`App listening on port http://localhost:${PORT}/v1/management`);
});
module.exports = app;
