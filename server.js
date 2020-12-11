const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const { join } = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { json, urlencoded } = express;

const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 4000;

app.use(logger('dev'));
app.use(json());
app.use(cors());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, 'public')));
// Routes
app.use('/user', require('./routes/user'));

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  console.log(req.app.get("env"), err.message);
  res.locals.error = req.app.get("env") == "development" ? err : {};
  console.log("error", err);
  // render the error page
  res.status(err.status || 500);
  res.json({ error: err.message });
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
