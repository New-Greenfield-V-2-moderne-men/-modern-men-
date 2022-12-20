let mongoose = require("mongoose");
const db = require("../database/index.js");
mongoose.Promise = global.Promise;

let userSchema = mongoose.Schema({
  username: { type: String },
  email: { type: String },
  pwd: { type: String },
  isAdmin: { type: Boolean, default: false }, 
  cart :[]
});

module.exports = mongoose.model("user", userSchema);
