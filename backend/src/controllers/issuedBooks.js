const issuedBooksSchema = require("../modals/issuedBooksSchema");

class issuedBooksController {
  
  static issueBook = async (req, res) => {
    const { bookId, studentId, issuedDate, dueDate } = req.body;
    try {
      const newIssuedBook = new issuedBooksSchema({
        bookId,
        studentId,
        issuedDate,
        dueDate,
        status: "issued",
      });

      const data = await newIssuedBook.save();
      return res.send({
        success: true,
        data,
        message: "Book Issued Successfully",
      });
    } catch (error) {
      console.error("Error While issuing book ==> ", error);
      return res.status(500).send({ success: false, error: error.message });
    }
  };

  static getIssuedBooks = async (req, res) => {
    try {
      const issuedBooks = await issuedBooksSchema
        .find({ status: "issued" })
        .populate("bookId", "isbn title category")
        .populate("studentId", "username email");
      return res.send({ success: true, data: issuedBooks, message: "" });
    } catch (error) {
      console.error("Error While getting issuedBooks ==> ", error);
      return res.status(500).send({ success: false, error: error.message });
    }
  };

  static returnBook = async (req, res) => {
    const id = req.params.id;
    const { returnDate, fine } = req.body;
  
    try {
      const returnedBook = await issuedBooksSchema.findByIdAndUpdate(
        id,
        {
          returnDate,
          fine,
          status: "returned",
        },
        { new: true }
      );
  
      if (!returnedBook) {
        return res.status(404).send({ success: false, message: "Book Not Found" });
      }
  
      return res.send({ success: true, message: "Book Returned Successfully" });
    } catch (error) {
      console.error("Error While returning book ==> ", error);
      return res.status(500).send({ success: false, error: error.message });
    }
  };
  
  static getReturnedBooks = async (req, res) => {
    try {
      const returnedBooks = await issuedBooksSchema
        .find({ status: "returned" })
        .populate("bookId")
        .populate("studentId");
      return res.send({ success: true, data: returnedBooks, message: "" });
    } catch (error) {
      console.error("Error While getting returnedBooks ==> ", error);
      return res.status(500).send({ success: false, error: error.message });
    }
  };

  static getOverdueBooks = async (req, res) => {
    try {
      const overdueBooks = await issuedBooksSchema
        .find({ status: "overDue" })
        .populate("bookId")
        .populate("studentId");
      return res.send({ success: true, data: overdueBooks, message: "" });
    } catch (error) {
      console.error("Error While getting overdueBooks ==> ", error);
      return res.status(500).send({ success: false, error: error.message });
    }
  };

  static editIssuedBookStatus = async (req, res) => {
    const id = req.params.id;
    const { status } = req.body;

    // Validate status
    const allowedStatuses = ["issued", "returned", "overDue"];
    if (!allowedStatuses.includes(status)) {
      return res
        .status(400)
        .send({ success: false, message: "Invalid status value" });
    }

    try {
      const updateStatus = await issuedBooksSchema.findByIdAndUpdate(
        id,
        { status },
        { new: true }
      );

      if (!updateStatus) {
        return res
          .status(404)
          .send({ success: false, message: "Issued Book Not Found!" });
      }
      return res.send({
        success: true,
        data: updateStatus,
        message: "Status Updated Successfully",
      });
    } catch (error) {
      console.error("Error While editing status ==> ", error);
      return res.status(500).send({ success: false, error: error.message });
    }
  };
}

module.exports = { issuedBooksController };
