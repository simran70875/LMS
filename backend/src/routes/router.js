const express = require("express");
const router = express.Router();
const { AuthController } = require("../controllers/auth");
const isValid = require("../middlewares/validations");
const { categoryController } = require("../controllers/category");
const { BooksController } = require("../controllers/books");

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

//NOTE - Handle students


module.exports = router;
