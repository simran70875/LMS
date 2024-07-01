const bookSchema = require("../modals/bookSchema");
const categorySchema = require("../modals/categorySchema");

class BooksController {
  //REVIEW - ========================== Add new book =================================

  static addBook = async (req, res) => {
    const {isbn, title, description, authorName, coverImage, category, publisher, publicationYear, availableCopies, borrowed, googleBookUrl, externalUrl, status} = req.body;
    try {
        const getCategory = await categorySchema.findOne({ cateName : category });
        if (!getCategory) {
            return res.send({success: false, message: "Category Not Found!"});
          }
        const isBookExists =  await bookSchema.findOne({isbn});
        if(isBookExists){
            return res.send({success: false, message: "Book Already Exists!"});
        }
        const newBook =  new bookSchema({
            isbn,
            title,
            description,
            authorName,
            coverImage,
            category : getCategory._id,
            publisher,
            publicationYear,
            availableCopies,
            borrowed,
            googleBookUrl,
            externalUrl,
            status
        })
        await newBook.save();
        return res.send({success: true, data:newBook, message:"Book Added Successfully"});
    } catch (error) {
        console.error("Error While saving book ==> ", error);
        return res.status(500).send({success: false, error: error.message });
    }

  };

  //REVIEW - ========================== get books =================================
  static getAllBooks = async (req, res) => {
    try {
        const allBooks = await bookSchema.find(); 
        return res.send({success: true, data: allBooks, message:""});
    } catch (error) {
        console.error("Error While getting books ==> ", error);
        return res.status(500).send({success: false, error: error.message });
    }
  };

  //REVIEW - ========================== get books category wise =================================
  static getCatBooks = async (req, res) => { 
    const {category} = req.body;
    try {
         // Find the category ID based on the category name
        const getCategory = await categorySchema.findOne({ cateName: category });
        if (!getCategory) {
            return res.status(400).send({ success: false, message: "Category Not Found!" });
        }
        const allBooks = await bookSchema.find({ category: getCategory._id });
        return res.send({success: true, data: allBooks, message:"Books retrieved successfully"});
    } catch (error) {
        console.error("Error While getting books ==> ", error);
        return res.status(500).send({success: false, error: error.message });
    }

  }

}

module.exports = { BooksController };
