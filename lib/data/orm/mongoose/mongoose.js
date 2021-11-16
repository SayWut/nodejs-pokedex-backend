const mongoose = require("mongoose");
const environment = require("../../../core/config/environment");

mongoose
  .connect(environment.database.url)
  .then(() => console.log("connected to MongoDB Atlas"))
  .catch((error) => console.error("MongoDB Atlas connection error", error));

module.exports = mongoose;
