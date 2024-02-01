const express = require('express')
const studentController = require("../controllers/student.controller")

const studentRouter = express.Router()

studentRouter.post("/add", studentController.add)
studentController.post("/login", studentController.login)

studentRouter.get("/logout/:studentId", studentController.logout)

module.exports = studentRouter

