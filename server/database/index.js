var mongoose = require("mongoose");
var mongoUri =
  "mongodb+srv://modern:men@cluster0.mqp0mif.mongodb.net/?retryWrites=true&w=majority";
mongoose.set("strictQuery", false);
mongoose.connect(mongoUri, () => {
  console.log("Database connected  :)");
});
var db = mongoose.connect(mongoUri);
module.exports = db;
