const issuedBooksSchema = require("../modals/isuuedBooksSchema");

class issuedBooksController {
  static issueBook = async (req, res) => {
    const { bookId, studentId, issuedDate, dueDate, status } = req.body;
    try {
      //NOTE - create new user
      const newIssuedBook = new issuedBooksSchema({
        bookId,
        studentId,
        issuedDate,
        dueDate,
        status,
      });

      //NOTE - save new data
      const data = await newIssuedBook.save();
   
    } catch (error) {
      console.error("Error While adding new user ==> ", error);
      return res.status(500).send({ success: false, error: error.message });
    }
  };

  static getIssuedBooks = async (req, res) => {
    try {
      const issuedBooks = await issuedBooksSchema.find({ role: "student" });
      return res.send({ success: true, data: issuedBooks, message: "" });
    } catch (error) {
      console.error("Error While getting issuedBooks ==> ", error);
      return res.status(500).send({ success: false, error: error.message });
    }
  };

  static getReturnedBooks = async (req, res) => {
    try {
      const returnedBooks = await issuedBooksSchema.find({ role: "returned" });
      return res.send({ success: true, data: returnedBooks, message: "" });
    } catch (error) {
      console.error("Error While getting returnedBooks ==> ", error);
      return res.status(500).send({ success: false, error: error.message });
    }
  };

  static getOverdueBooks = async (req, res) => {
    try {
      const overdueBooks = await issuedBooksSchema.find({ role: "overDue" });
      return res.send({ success: true, data: overdueBooks, message: "" });
    } catch (error) {
      console.error("Error While getting overdueBooks ==> ", error);
      return res.status(500).send({ success: false, error: error.message });
    }
  };
}

module.exports = { issuedBooksController };
