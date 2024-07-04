const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  role: { type: String, required: true, enum: ["student", "librarian"] },
  username: { type: String, required: true, unique: true },
  phone: { type: Number, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  image: { type: String },
  address: { type: String },
  course: { type: String },
  courseYears: { type: Number },
  createdDate: { type: Date, required: true, default: Date.now },
  status: { type: Boolean, required: true, default: true },
});

module.exports = mongoose.model("users", userSchema);
