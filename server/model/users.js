const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
const usersSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  verifytoken:{
     type:String
  }
})
const Users = new mongoose.model("User",usersSchema);
module.exports = Users;