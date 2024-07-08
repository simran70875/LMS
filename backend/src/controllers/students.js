const userSchema = require("../modals/userSchema");
const ifUserExists = require("../services/isUserExist");
const { getBcryptedPassword } = require("../utils/bcryptPassword");
const createTransporter = require("../utils/nodemailer");

class studentController {
  static addStudent = async (req, res) => {
    const {
      username,
      phone,
      email,
      password,
      image,
      address,
      course,
      courseYears,
    } = req.body;
    try {
      //NOTE - Check if user already exists
      await ifUserExists({ username: username });
      await ifUserExists({ email: email });

      //NOTE - encrypt password
      const encryptedPassword = await getBcryptedPassword(password);

      //NOTE - create new user
      const newUser = new userSchema({
        role: "student",
        username,
        phone,
        email,
        password: encryptedPassword,
        image,
        address,
        course,
        courseYears,
        status: true,
      });

      //NOTE - save new data
      const data = await newUser.save();

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Test",
        text: "Hi, this is a test email",
      };

      let emailTransporter = await createTransporter();

      emailTransporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Error while sending email ==> ", error);
          return res.status(500).send({
            success: false,
            message: "User created, but email could not be sent",
            error: error.message,
          });
        } else {
          console.log("Email sent: " + info.response);
          return res.send({
            success: true,
            data,
            message: "User added Successfully and email sent Successfully",
          });
        }
      });
    } catch (error) {
      console.error("Error While adding new user ==> ", error);
      return res.status(500).send({ success: false, error: error.message });
    }
  };

  static getAllStudents = async (req, res) => {
    try {
      const allStudents = await userSchema.find({ role: "student" });
      return res.send({ success: true, data: allStudents, message: "" });
    } catch (error) {
      console.error("Error While getting allStudents ==> ", error);
      return res.status(500).send({ success: false, error: error.message });
    }
  };

  static editStudent = async (req, res) => {
    const id = req.params.id;
    const {
      username,
      phone,
      email,
      password,
      image,
      address,
      course,
      courseYears,
    } = req.body;

    try {
      const encryptedPassword = await getBcryptedPassword(password);
      const updateStudent = await userSchema.findByIdAndUpdate(
        id,
        {
          username,
          phone,
          email,
          password: encryptedPassword,
          image,
          address,
          course,
          courseYears,
          updatedAt: Date.now(),
        },
        { new: true }
      );

      if (!updateStudent) {
        return res.send({ success: false, message: "Student Not Found!" });
      }
      return res.send({
        success: true,
        message: "Student Updated Successfully",
      });
    } catch (error) {
      console.error("Error While editing Student ==> ", error);
      return res.status(500).send({ success: false, error: error.message });
    }
  };

  static deleteStudent = async (req, res) => {
    const id = req.params.id;
    try {
      const dltStudent = await userSchema.findByIdAndDelete(id);

      if (!dltStudent) {
        return res.send({ success: false, message: "Student Not Found!" });
      }
      return res.send({
        success: true,
        message: "Student deleted Successfully",
      });
    } catch (error) {
      console.error("Error While deleting Student ==> ", error);
      return res.status(500).send({ success: false, error: error.message });
    }
  };

  static editStudentStatus = async (req, res) => {
    const id = req.params.id;
    const { status } = req.body;
    try {
      const updateStudentStatus = await userSchema.findByIdAndUpdate(
        id,
        {
          status,
        },
        { new: true }
      );

      if (!updateStudentStatus) {
        return res.send({ success: false, message: "Student Not Found!" });
      }
      return res.send({
        success: true,
        message: "Student Status Updated Successfully",
      });
    } catch (error) {
      console.error("Error While editing Student status ==> ", error);
      return res.status(500).send({ success: false, error: error.message });
    }
  };
}

module.exports = { studentController };
