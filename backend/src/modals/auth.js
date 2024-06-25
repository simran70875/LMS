const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  role: { type: String,  required: true, },
  Username: { type: String, required: true, unique: true },
  phone: { type: Number, required: true, unique: true },
  email: { type: String },
  password: { type: String,  required: true },
  createdDate: { type: Date, required: true, default: Date.now },
});
module.exports = mongoose.model("users", userSchema);
