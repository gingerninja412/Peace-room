const express = require('express')
const studentRouter = require('./routers/student.router')
const teacherRouter = require('./routers/teacher.router')
const adminRouter = require("./routers/admin.router")
const nominationRouter = require("./routers/nomination.router") 
const resoursesRouter = require('./routers/resources.router')

const router = express.Router()

router.use("/student", studentRouter)
router.use("/teacher", teacherRouter)
router.use("/admin", adminRouter)
router.use("/nomination", nominationRouter)
router.use("/resources", resoursesRouter)

module.exports = router