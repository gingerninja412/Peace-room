const express = require('express')
const teacherController = require("../controllers/teacher.controller")

const teacherRouter = express.Router()

teacherRouter.post("/add", teacherController.add)
teacherRouter.post("/login", teacherController.login)

teacherRouter.get("/logout/:teacherID", teacherController.logout)
teacherRouter.get("/getSchools", teacherController.getSchools)

module.exports = teacherRouter