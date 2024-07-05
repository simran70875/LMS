const mongoose = require("mongoose");
const { Schema } = mongoose;

const issuedBooksSchema = new Schema({
  bookId: { type: Schema.Types.ObjectId, ref: "books", required: true },
  studentId: { type: Schema.Types.ObjectId, ref: "users", required: true },
  issuedDate: { type: Date, required: true, default: Date.now },
  dueDate: {
    type: Date,
    required: true,
    default: function () {
      let date = new Date();
      date.setDate(date.getDate() + 30);
      return date;
    },
  },
  status: {
    type: String,
    required: true,
    enum: ["issued", "returned", "overDue"],
    default: "issued",
  },
  condition: {
    type: String,
    enum: ["good", "okay", "bad"],
    default: "good",
  },
  returnDate: {
    type: Date,
  },
  fine: {
    type: Number,
  },
});

module.exports = mongoose.model("issuedBooks", issuedBooksSchema);
