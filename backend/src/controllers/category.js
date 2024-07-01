const categorySchema = require("../modals/categorySchema");

class categoryController {
  //REVIEW - ========================== Add new catgory =================================
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

  //REVIEW - ========================== get all catgories =================================
  static getCategories = async(req, res) => {
    try {
        const allCats = await categorySchema.find(); 
        return res.send({success: true, data:allCats, message:""});
    } catch (error) {
        console.error("Error While getting cats ==> ", error);
        return res.status(500).send({success: false, error: error.message });
    }
  };


  //REVIEW - ========================== edit Catgories =================================
  static editCategory = async(req, res) => {
    const id = req.params.id;
    const { cateName } = req.body;
    try {
        const editCat = await categorySchema.findByIdAndUpdate(
          id,
          {
            cateName,
            updatedAt: Date.now()
          },
          { new: true }
        ); 
        
        if(!editCat){
          return res.send({success: false, message:"Category Not Found!"});
        }
        return res.send({success: true, message:"Category Updated Successfully"});
    } catch (error) {
        console.error("Error While editing category ==> ", error);
        return res.status(500).send({success: false, error: error.message });
    }
  };


  //REVIEW - ========================== edit Catgories =================================
  static deleteCategory = async(req, res) => {
    const id = req.params.id;
    try {
        const dltCat = await categorySchema.findByIdAndDelete(id); 
        if(!dltCat){
          return res.send({success: false, message:"Category Not Found!"});
        }
        return res.send({success: true, message:"Category Deleted Successfully"});
    } catch (error) {
        console.error("Error While deleting category ==> ", error);
        return res.status(500).send({success: false, error: error.message });
    }
  };
}


module.exports = { categoryController };