const express = require("express");
const router = express.Router();
const { AuthController } = require("../controllers/auth");
const isValid = require("../middlewares/validations");
const { categoryController } = require("../controllers/category");
const { BooksController } = require("../controllers/books");
const { studentController } = require("../controllers/students");
const { issuedBooksController } = require("../controllers/issuedBooks");
const { fineController } = require("../controllers/fine");

router.get("/", AuthController.welcome_msz);

//NOTE - Auth Routes
router.post("/register", isValid.validateRegisterUser, AuthController.register);
router.post("/login", isValid.validateLoginUser, AuthController.loginUser);

//NOTE - Handle Categories
router.post("/addCategory", isValid.validateNewCategory, categoryController.addCategory);
router.get("/getCategories", categoryController.getCategories);
router.put("/editCategory/:id", isValid.validateNewCategory, categoryController.editCategory);
router.delete("/deleteCategory/:id", categoryController.deleteCategory);

//NOTE - Handle Books
router.post("/addBook", isValid.validateNewBook, BooksController.addBook);
router.get("/getBooks", BooksController.getAllBooks);
router.get("/getCatBooks", isValid.validateGetBooks, BooksController.getCatBooks);
router.put("/editBook/:id", isValid.validateNewBook, BooksController.editBook);
router.delete("/deleteBook/:id", BooksController.deleteBook);

//NOTE - Handle students dsda
router.post("/addStudent", isValid.validateNewStudent, studentController.addStudent);
router.get("/getStudents", studentController.getAllStudents);
router.put("/editStudent/:id", studentController.editStudent);
router.delete("/deleteStudent/:id", studentController.deleteStudent);
router.put("/editStudentStatus/:id", studentController.editStudentStatus);

//NOTE - Handle issued books
router.post("/issueNewBook", isValid.validateIssueBook, issuedBooksController.issueBook);
router.put("/returnBook/:id", isValid.validateReturnBook, issuedBooksController.returnBook);
router.get("/getIssuedBooks", issuedBooksController.getIssuedBooks);
router.get("/getReturnedBooks", issuedBooksController.getReturnedBooks);
router.get("/getOverdueBooks", issuedBooksController.getOverdueBooks);
router.put("/editIssuedBookStatus/:id", issuedBooksController.editIssuedBookStatus);

//NOTE - Handle student fines
router.post("/addFine", isValid.validateAddFine, fineController.addFine);
router.put("/editFine/:id", isValid.validateAddFine, fineController.editFine);
router.delete("/deleteFine/:id", fineController.deleteFine);
router.get("/getFines", fineController.getFines);



module.exports = router;
