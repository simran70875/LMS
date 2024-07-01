const userSchema = require("../modals/userSchema");
const ifUserExists = require("../services/isUserExist");
const { getBcryptedPassword } = require("../utils/bcryptPassword");
const transporter = require("../utils/nodemailer");

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
      });

      //NOTE - save new data
      const data = await newUser.save();
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Welcome to Book.com",
        text: `Dear ${username},\n\nYour library account has been created successfully.\n\nUsername: ${username}\nPassword: ${password}\n\nBest Regards,\nThe Library Team`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
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
}

modules.export = { studentController };
