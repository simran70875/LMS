const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  role: { type: String },
  phone: { type: Number, required: true, unique: true },
  email: { type: String },
  userId: { type: String, required: true, unique: true },
});
module.exports = mongoose.model("users", userSchema);
