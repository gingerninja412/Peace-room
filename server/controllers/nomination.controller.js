const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const nominationController = {}

nominationController.add = async (req, res) => {
  try {
    console.log(req.user)
    await prisma.nominations.create({
      data: {
        nominee: req.body.name,
        content: req.body.reason,
        author: req.user,
        approved: false,
        votes: 0
      }
    })
    res.status(200).send("working")
  } catch (error) {
    console.log(error)
  }

}

nominationController.upvote = async (req, res) => {

}

nominationController.downvote = async (req, res) => {

}

nominationController.delete = async (req, res) => {

}

nominationController.approve = async (req, res) => {

}

nominationController.disapprove = async (req, res) => {

}

module.exports = nominationController