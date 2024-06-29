const categorySchema = require("../modals/categorySchema");

class categoryController {
  static addCategory = async (req, res) => {
    const { cateName } = req.body;
    try {
      const catAlreadyExists = await categorySchema.findOne({ cateName });
      if (catAlreadyExists) {
        return res.send({success: false, message: "Category Already Exists!"});
      }

      const newCat = new categorySchema({
        cateName,
      });
      await newCat.save();
      return res.send({success: true, message:"Category Added Successfully"});
    } catch (error) {
        console.error("Error While Registering ==> ", error);
        return res.status(500).send({success: false, error: error.message });
    }
  };

  static getCategories = async(req, res) => {
    try {
        const allCats = await categorySchema.find(); 
        return res.send({success: true, data:allCats, message:""});
    } catch (error) {
        console.error("Error While getting cats ==> ", error);
        return res.status(500).send({success: false, error: error.message });
    }
  };
}


module.exports = { categoryController };