const mongoose = require("mongoose");

const fineSchema = new mongoose.Schema({
  issuedBookId: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
  delayedBy: { type: Number },
  fineAmount: {
    type: Number,
  },
  status: {
    type: String,
    required: true,
    enum: ["paid", "unpaid"],
    default: "unpaid",
  },
  notes: {
    type: String,
  },
  paymentMode:{
    type: String,
    enum: ["online", "offline"],
  }
  
});

module.exports = mongoose.model("fines", fineSchema);
