const router = require("express").Router()

const userController = require("../controllers/user.js")

router.post("/update-me", userController)