const express = require('express')
const adminController = require('../controllers/admin.controller')

const adminRouter = express.Router()

adminRouter.post("/add", adminController.add)
adminRouter.post("/login", adminController.login)

adminRouter.get("/logout/:adminId", adminController.logout)

module.exports = adminRouter