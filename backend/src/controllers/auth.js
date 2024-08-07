const userSchema = require("../modals/userSchema");
const ifUserExists = require("../services/isUserExist");
const { getBcryptedPassword, comparePassword } = require("../utils/bcryptPassword");
const { getJwtToken } = require("../utils/createJwtToken");

class AuthController {
  static welcome_msz = (req, res) => {
    res.send("Welcome to LMS backend");
  };

 //REVIEW - ========================== User Registration =================================
  static register = async (req, res) => {
    const { role, username, phone, email, password, confirmPassword, image, address, course, courseYears } = req.body;
    try {
      //NOTE -  Check if password and confirmPassword match
      if(password != confirmPassword){
        return res.status(400).send({ success: false, message: "Confirm Password does not match" });
      }

      //NOTE - Check if user already exists
      await ifUserExists({username:username});
      await ifUserExists({email:email});
     

      //NOTE - encrypt password
      const encryptedPassword = await getBcryptedPassword(password);
      
      //NOTE - create new user
      const newUser = new userSchema({
        role,
        username,
        phone,
        email,
        password: encryptedPassword,
        image,
        address,
        course,
        courseYears
      });

      //NOTE - save new data
      const data = await newUser.save();
      return res.send({ success: true, data, message: "Registered Successfully" });

    } catch (error) {
      console.error("Error While Registering ==> ", error);
      return res.send.status(500).send({ success: false, message: error.message });
    }
  };

  //REVIEW - ========================== User Login =================================
  static loginUser = async (req, res) => {
    const { username, password } = req.body;
    
    
    try {
      //NOTE - check user exists
      const user = await userSchema.findOne({ username });
      if (!user) {
        return res.json({success: false, message: "User not found" });
      }

      //NOTE - Compare password correct or not
      await comparePassword(password, user.password);

      //NOTE - add token to response
      const token = await getJwtToken(user._id);
      const data = {...user._doc, token};

      //NOTE - send response
      return res.send({ success: true, data , message: "Login Successfully" });
      
    } catch (error) {
      console.error("Error While login ==> ", error);
      return res.status(500).send({ success: false, message: error.message });
    }
  }

}

module.exports = { AuthController };
