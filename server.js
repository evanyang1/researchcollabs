const express = require("express");
const mongoose = require("mongoose");

const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 4000;

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
