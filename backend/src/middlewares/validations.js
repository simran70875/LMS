const { check, validationResult } = require("express-validator");

exports.validateRegisterUser = [
  check("role").trim().not().isEmpty().withMessage("Role is required").isIn(["student", "librarian"]).withMessage("Role must be either 'student' or 'librarian'"),
  check("username").trim().not().isEmpty().withMessage("Username is required"),
  check("phone").trim().isNumeric().withMessage("Phone must be a number").not().isEmpty().withMessage("Phone is required"),
  check("email").trim().isEmail().withMessage("Email is invalid").not().isEmpty().withMessage("Email is required"),
  check("password").trim().not().isEmpty().withMessage("Password is required"),
  check("confirmPassword").trim().not().isEmpty().withMessage("confirm Password is required"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "Validation failed",
        errors: errors.array(),
      });
    }
    next();
  },
];

exports.validateLoginUser = [
  check("username").trim().not().isEmpty().withMessage("Username or email is required"),
  check("password").trim().not().isEmpty().withMessage("Password is required"),
  (req,res,next) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "Validation failed",
        errors: errors.array(),
      });
    }
    next();

  }
]
