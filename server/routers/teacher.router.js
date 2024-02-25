const express = require('express')
const passport = require('passport')
const teacherController = require("../controllers/teacher.controller")

const teacherRouter = express.Router()

teacherRouter.post("/add", teacherController.add)
teacherRouter.post("/login", teacherController.login)
teacherRouter.post("/addClass", passport.authenticate('jwt', {session: false}), teacherController.addClass)

teacherRouter.get("/logout/:teacherID", teacherController.logout)
teacherRouter.get("/getSchools", teacherController.getSchools)
teacherRouter.get("/getClasses", teacherController.getClass)

module.exports = teacherRouter