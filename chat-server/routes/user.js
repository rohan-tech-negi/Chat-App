const router = require("express").Router()

const userController = require("../controllers/user.js")
const authController = require("../controllers/auth.js")

router.post("/update-me", authController.protect , userController.updateMe)

router.get("/get-users", authController.protect, userController.getUsers)
router.get("/get-friends", authController.protect, userController.getFriends)
router.get("/get-requests", authController.protect, userController.getRequests)


module.exports = router;