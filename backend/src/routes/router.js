const express = require("express");
const router = express.Router();
const { AuthController } = require("../controllers/auth");
const isValid = require("../middlewares/validations")

router.get("/", AuthController.welcome_msz);


//NOTE - Auth Routes
router.post("/register", isValid.validateRegisterUser, AuthController.register);
router.post("/login", isValid.validateLoginUser, AuthController.loginUser);


module.exports = router;
