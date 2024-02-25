const express = require('express')
const resourceController = require('../controllers/resources.controller')

const resourcesRouter = express.Router()

resourcesRouter.get("/lessonOne", resourceController.lessonOne)
resourcesRouter.get("/lessonTwo", resourceController.lessonTwo)
resourcesRouter.get("/together", resourceController.together)
resourcesRouter.get("/biography", resourceController.biography)
resourcesRouter.get("/Nomination", resourceController.nomination)

module.exports = resourcesRouter