const express = require('express')
const studentRouter = require('./routers/student.router')
const teacherRouter = require('./routers/teacher.router')
const adminRouter = require("./routers/admin.router")
const nominationRouter = require("./routers/nomination.router") 
const resoursesRouter = require('./routers/resources.router')
const passport = require('passport')
const checkAuth = require('./util/checkAuth')

const router = express.Router()

router.use("/student", studentRouter)
router.use("/teacher", teacherRouter)
router.use("/admin", adminRouter)
router.use("/nomination", passport.authenticate("jwt", {session: false}), nominationRouter)
router.use("/resources", resoursesRouter)

router.get("/checkAuth", passport.authenticate("jwt", {session: false}), checkAuth)


module.exports = router