const router = require("express").Router()

const userController = require("../controllers/user.js")
const authController = require("../controllers/auth.js")

router.post("/update-me", authController.protect , userController.updateMe)

module.exports = router;