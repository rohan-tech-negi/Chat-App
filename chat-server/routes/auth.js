const router = require("express").Router();

const authController = require("../controllers/auth.js");

router.post("/login", authController.login);
router.post("/register", authController.register);

router.post("/send-otp", authController.sendOTP);

router.post("/verify-otp", authController.verifyOTP);

router.post("/forget-password", authController.forgotPassword);

router.post("/reset-password", authController.resetPassword);

module.exports = router;
