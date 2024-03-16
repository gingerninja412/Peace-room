const express = require('express')
const nominationController = require('../controllers/nomination.controller')
const passport = require('passport')

const nominationRouter = express.Router()

nominationRouter.post("/add", passport.authenticate("jwt", {session: false}), nominationController.add)

nominationRouter.get("/upvote/:nominationId", nominationController.upvote)
nominationRouter.get("/approve/:nominationId", nominationController.approve)
nominationRouter.get("/disapprove/:nominationId", nominationController.disapprove)
nominationRouter.get("/getByClass/:class", nominationController.getByClass)
nominationRouter.get("/getRandom", nominationController.getRandom)
nominationRouter.get("/getAlphabetical/:letter", nominationController.getAlphabetical)

module.exports = nominationRouter