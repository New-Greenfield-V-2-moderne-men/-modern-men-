let mongoose = require("mongoose");
const db = require("../database/index.js");
mongoose.Promise = global.Promise;

let userSchema = mongoose.Schema({
  name: { type: String },
  email: { type: String },
  pwd: { type: String },
  isAdmin: { type: Boolean, default: false }, 
  phone:{type:Number},
  bio:{type:String},
  cart :[] ,
  favorite : []
});

module.exports = mongoose.model("user", userSchema);
