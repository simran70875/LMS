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
        message: "Validation failed! Some fields are required",
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

exports.validateNewCategory = [
  check("cateName").trim().not().isEmpty().withMessage("Category Name is required"),
  (req,res,next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "Add category failed",
        errors: errors.array(),
      });
    }
    next();
  }
]

exports.validateNewBook = [
  check("isbn").trim().not().isEmpty().withMessage("ISBN is required fields"),
  check("title").trim().not().isEmpty().withMessage("title is required fields"),
  check("authorName").trim().not().isEmpty().withMessage("authorName is required fields"),
  check("category").trim().not().isEmpty().withMessage("category is required fields"),
  check("publisher").trim().not().isEmpty().withMessage("publisher is required fields"),
  check("availableCopies").trim().not().isEmpty().withMessage("availableCopies is required fields"),
  check("status").trim().not().isEmpty().withMessage("status is required fields"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) { 
      return res.status(400).json({
        message: "Add New Book failed",
        errors: errors.array(),
      });
    }
    next();
  }
]

exports.validateGetBooks = [
  check("category").trim().not().isEmpty().withMessage("Category is Required Field!"),
  (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      return res.status(400).json({
        message: "Get books by category failed",
        errors: errors.array(),
      });
    }
    next();
  }
]

exports.validateNewStudent = [
  check("username").trim().not().isEmpty().withMessage("Username is Required field!"),
  check("phone").trim().not().isEmpty().withMessage("phone is Required field!"),
  check("email").trim().not().isEmpty().withMessage("email is Required field!"),
  check("password").trim().not().isEmpty().withMessage("password is Required field!"),
  check("address").trim().not().isEmpty().withMessage("address is Required field!"),
  check("course").trim().not().isEmpty().withMessage("course is Required field!"),
  (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({
        message: "add student failed",
        errors: errors.array(),
      });
    }
    next();
  }
]

exports.validateIssueBook = [
  check("bookId").trim().not().isEmpty().withMessage("book Id is Required field!"),
  check("studentId").trim().not().isEmpty().withMessage("Student Id is Required field!"),
  check("issuedDate").trim().not().isEmpty().withMessage("Issued Date is Required field!"),
  check("dueDate").trim().not().isEmpty().withMessage("Due Date is Required field!"),
  (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({
        message: "Issue Book failed!",
        errors: errors.array(),
      });
    }
    next();
  }
]

exports.validateReturnBook = [
  check("returnDate").trim().not().isEmpty().withMessage("Return Date is Required field!"),
  (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({
        message: "Return Book failed!",
        errors: errors.array(),
      });
    }
    next();
  }
]

exports.validateAddFine = [
  check("issuedBookId").trim().not().isEmpty().withMessage("issued Book Id is Required!"),
  check("delayedBy").trim().not().isEmpty().withMessage("delayedBy is Required!"),
  check("fineAmount").trim().not().isEmpty().withMessage("fineAmount is Required!"),
  check("status").trim().not().isEmpty().withMessage("status is Required!"),
  check("paymentMode").trim().not().isEmpty().withMessage("paymentMode is Required!"),
  (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({
        message: "add fine failed!",
        errors: errors.array(),
      });
    }
    next();
  }
]

