const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
const productsSchema = new mongoose.Schema({
  title: String,
  price: String,
  description: String,
  category: String,
  image: String,  
  userId:String
})
const Products = new mongoose.model("Product",productsSchema);
module.exports = Products;