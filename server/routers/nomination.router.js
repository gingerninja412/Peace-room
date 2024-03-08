const express = require('express')
const nominationController = require('../controllers/nomination.controller')
const passport = require('passport')

const nominationRouter = express.Router()

nominationRouter.post("/add", passport.authenticate("jwt", {session: false}), nominationController.add)

nominationRouter.get("/upvote/:nominationId", nominationController.upvote)
nominationRouter.get("/downvote/:nominationId", nominationController.downvote)
nominationRouter.get("/approve/:nominationId", nominationController.approve)
nominationRouter.get("/disapprove/:nominationId", nominationController.disapprove)

nominationRouter.delete("/delete/:nominationId", nominationController.delete)

module.exports = nominationRouter