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
  static deleteFine = async (req, res) => {
    const id = req.params.id;
    try {
      const deleteFine = await fineSchema.findByIdAndDelete(id);
      if(!deleteFine){
        return res.send({ success: false, message: "Fine not found!" });
      }
      return res.send({ success: true, data: deleteFine, message: "Fine Deleted Successfully!" });
    } catch (error) {
      console.error("Error While getting AllFines ==> ", error);
      return res.status(500).send({ success: false, error: error.message });
    }
  };
  static editFine = async (req, res) => {
    const id = req.params.id;
    const { issuedBookId, delayedBy, fineAmount, status, notes, paymentMode } = req.body;
    try {
      const updateFine = new fineSchema.findByIdAndUpdate(id,{
        issuedBookId,
        delayedBy,
        fineAmount,
        status,
        notes,
        paymentMode,
      },{new:true});
      if(!updateFine){
        return res.send({ success: false, message: "Fine not found!" });
      }

      return res.send({
        success: true,
        data:updateFine,
        message: "Fine Updated Successfully",
      });
    } catch (error) {
      console.error("Error While updating fine ==> ", error);
      return res.status(500).send({ success: false, error: error.message });
    }
  };
}



module.exports = { fineController };
