const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  isbn :{type:String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String },
  authorName: { type: String, required: true },
  coverImage : {type: String, required: true },
  category: { type: String, ref: "categorySchema", required: true},
  publisher : { type: String,},
  publicationYear : { type: String, required: true},
  availableCopies : { type:Number , required: true},
  borrowed : { type:Number, required: true},
  googleBookUrl : { type:String },
  externalUrl : { type:String },
  status : {type: Boolean, required: true , default: true},
  addedAt : {type: Date, required: true , default: Date.now() },
  updatedAt : {type: Date, required: true , default: Date.now() },
});

module.exports = mongoose.model("books", bookSchema);
