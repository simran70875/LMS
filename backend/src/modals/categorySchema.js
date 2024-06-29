const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  cateName: { type: String, required: true },
  addedAt: { type: Date, required: true, default: Date.now() },
  updatedAt: { type: Date, required: true, default: Date.now() },
});

module.exports = mongoose.model("category", categorySchema);
