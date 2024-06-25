const express = require("express");
const router = express.Router();
const { AuthController } = require("../controllers/auth");


//SECTION - Auth Routes
router.get("/", AuthController.welcome_msz);

module.exports = router;
