const fineSchema = require("../modals/fineSchema");

class fineController {
  static addFine = async (req, res) => {
    const { issuedBookId, delayedBy, fineAmount, status, notes, paymentMode } = req.body;
    try {
      const newFine = new fineSchema({
        issuedBookId,
        delayedBy,
        fineAmount,
        status,
        notes,
        paymentMode,
      });

      const data = await newFine.save();
      return res.send({
        success: true,
        data,
        message: "Fine Added Successfully",
      });
    } catch (error) {
      console.error("Error While adding fine ==> ", error);
      return res.status(500).send({ success: false, error: error.message });
    }
  };
  static getFines = async (req, res) => {
    try {
      const getAllFines = await fineSchema.find().populate("issuedBookId", "studentId bookId issuedDate dueDate");
      return res.send({ success: true, data: getAllFines, message: "" });
    } catch (error) {
      console.error("Error While getting AllFines ==> ", error);
      return res.status(500).send({ success: false, error: error.message });
    }
  };
}



module.exports = { fineController };
