const express = require('express')
const studentController = require("../controllers/student.controller")

const studentRouter = express.Router()

studentRouter.post("/add", studentController.add)
studentRouter.post("/login", studentController.login)

studentRouter.get("/logout/:studentId", studentController.logout)
studentRouter.get("/getClasses/:school", studentController.getClasses)

module.exports = studentRouter

