var createError = require("http-errors");
var express = require("express");
const cors = require("cors");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/userRouter");
var adminRouter = require("./routes/adminRouter");
var authRouter = require("./routes/authRouter");

var app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // Match your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Include OPTIONS for preflight
    allowedHeaders: ["Content-Type", "Authorization"], // Allow necessary headers
    credentials: true, // Enable cookies if used
  })
);

// View engine setup (if using Jade for views)
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/user", usersRouter);
app.use("/admin", adminRouter);
app.use("/auth", authRouter);

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

// Start the server on a defined port
var port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);

module.exports = app;
